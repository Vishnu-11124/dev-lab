import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Page not found",
};

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-6 pt-10">
      <div className="max-w-md text-center">
        <p className="text-8xl font-semibold tracking-tighter text-white/10 md:text-9xl">
          404
        </p>

        <h1 className="-mt-4 text-3xl font-semibold tracking-tight text-white md:-mt-6 md:text-4xl">
          This scene is missing
        </h1>

        <p className="mt-4 text-base leading-relaxed text-white/60">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to the movies.
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
