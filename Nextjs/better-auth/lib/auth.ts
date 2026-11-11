import { prismaAdapter } from "@better-auth/prisma-adapter";
import { betterAuth } from "better-auth";
import { prisma } from "./client";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: "",
      clientSecret: "",
    },
    google: {
      clientId: "",
      clientSecret: "",
    },
  },
});
