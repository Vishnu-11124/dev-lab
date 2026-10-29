"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const userSchema = z.object({
  fullName: z.string().min(1, "Full name is required").optional(),

  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

type UserDetails = z.infer<typeof userSchema>;

const Login = () => {
  const [state, setState] = useState<"login" | "register">("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetails>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    shouldUnregister: true,
  });

  const handleLogin = (data: UserDetails) => {
    console.log("UserData:", data);
  };

  return (
    <div>
      <h1>{state === "login" ? "Sign In" : "Sign Up"}</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        {state === "register" && (
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" type="text" {...register("fullName")} />
            {errors.fullName && <p>{errors.fullName.message}</p>}
          </div>
        )}

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">
          {state === "login" ? "Sign In" : "Sign Up"}
        </button>

        <hr />

        {state === "login" ? (
          <p>
            Create a new account?{" "}
            <button type="button" onClick={() => setState("register")}>
              Sign Up
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button type="button" onClick={() => setState("login")}>
              Sign In
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
