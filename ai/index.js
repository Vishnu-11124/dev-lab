import express from "express";
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Gemini client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Health check
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to AI server",
  });
});

// Generate AI response

app.post("/ai", async (req, res) => {
  try {
    const { input } = req.body;

    if (!input || typeof input !== "string") {
      return res.status(400).json({
        message: "Please provide a valid input",
      });
    }

    let response;

    // Retry up to 3 times
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: input,
        });

        break;
      } catch (error) {
        if (error.status !== 503 || attempt === 3) {
          throw error;
        }

        const delay = 1000 * 2 ** (attempt - 1);

        console.log(`Gemini unavailable. Retrying in ${delay / 1000}s...`);

        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    return res.status(200).json({
      message: response.text,
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    return res.status(error.status === 503 ? 503 : 500).json({
      message:
        error.status === 503
          ? "Gemini is temporarily unavailable. Please try again later."
          : "Failed to generate AI response",
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
