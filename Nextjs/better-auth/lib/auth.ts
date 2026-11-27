import { prismaAdapter } from "@better-auth/prisma-adapter";
import { betterAuth } from "better-auth";
import { prisma } from "./client";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: "Ov23liHRWcctHtflelOA",
      clientSecret: "f478b76045317ea8923fb591dc6ca5e3a3953232",
    },
    google: {
      clientId: "",
      clientSecret: "",
    },
  },
  plugins: [nextCookies()]
});
