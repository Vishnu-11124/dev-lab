"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div className="mb-6 inline-flex items-center gap-3 text-sm font-medium text-[#8E9A93]">
      <ArrowLeft
        onClick={() => router.back()}
        className="h-9 w-9 cursor-pointer rounded-full border border-[#38433E] bg-[#242C29] p-2 text-[#E4E8E2] transition hover:-translate-x-0.5 hover:border-[#A3B8A8]/50 hover:text-[#A3B8A8]"
      />{" "}
      Back
    </div>
  );
};

export default GoBackButton;
