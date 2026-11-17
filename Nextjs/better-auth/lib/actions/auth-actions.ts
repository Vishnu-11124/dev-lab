"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

interface UserSignUpInfo {
  email: string;
  password: string;
  name: string;
}

interface UserSignInInfo {
  email: string;
  password: string;
}

export const signUp = async ({ email, password, name }: UserSignUpInfo) => {
  const result = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      callbackURL: "/dashboard",
    },
  });

  return result;
};

export const signIn = async ({ email, password }: UserSignInInfo) => {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: "/dashboard",
    },
  });

  return result;
};

export const signOut = async () => {
  const result = await auth.api.signOut({ headers: await headers() });
  return result;
};
