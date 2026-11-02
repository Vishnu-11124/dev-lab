import prisma from "../config/db.js";

const seed = async () => {
  await prisma.user.createMany({
    data: [
      {
        name: "Alice",
        email: "alice@neon.com",
        age: 25,
        isMarried: false,
        job: "Software Developer",
        nationality: "American",
      },
      {
        name: "John",
        email: "john@neon.com",
        age: 30,
        isMarried: true,
        job: "Data Analyst",
        nationality: "British",
      },
      {
        name: "Emma",
        email: "emma@neon.com",
        age: 28,
        isMarried: false,
        job: "UI/UX Designer",
        nationality: "Canadian",
      },
      {
        name: "Michael",
        email: "michael@neon.com",
        age: 35,
        isMarried: true,
        job: "Project Manager",
        nationality: "Australian",
      },
      {
        name: "Sophia",
        email: "sophia@neon.com",
        age: 24,
        isMarried: false,
        job: "Frontend Developer",
        nationality: "Indian",
      },
      {
        name: "David",
        email: "david@neon.com",
        age: 32,
        isMarried: true,
        job: "Backend Developer",
        nationality: "German",
      },
      {
        name: "Olivia",
        email: "olivia@neon.com",
        age: 27,
        isMarried: false,
        job: "Marketing Specialist",
        nationality: "French",
      },
      {
        name: "James",
        email: "james@neon.com",
        age: 29,
        isMarried: true,
        job: "DevOps Engineer",
        nationality: "Irish",
      },
      {
        name: "Isabella",
        email: "isabella@neon.com",
        age: 26,
        isMarried: false,
        job: "Product Designer",
        nationality: "Italian",
      },
      {
        name: "William",
        email: "william@neon.com",
        age: 40,
        isMarried: true,
        job: "Software Architect",
        nationality: "Japanese",
      },
    ],
    skipDuplicates: true,
  });
};

seed()
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
