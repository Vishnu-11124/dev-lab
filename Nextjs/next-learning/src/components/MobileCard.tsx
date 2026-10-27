"use client";
import { Product } from "@/types/type";
import Link from "next/link";
import React from "react";

const MobileCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={`/ecommerce/${product.id}`}
      className="group block focus-visible:outline-none"
    >
      <div className="overflow-hidden rounded-2xl border border-[#38433E] bg-[#242C29] p-3 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#A3B8A8]/40 group-hover:bg-[#2A332F] group-hover:shadow-xl group-hover:shadow-black/30 group-focus-visible:ring-4 group-focus-visible:ring-[#A3B8A8]/25">
        <div className="aspect-square overflow-hidden rounded-xl bg-[#1B211F]">
          <img
            src={product.image}
            alt="product image"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-1.5 px-1 pb-1">
          <p className="truncate text-sm font-semibold text-[#E4E8E2] transition group-hover:text-[#A3B8A8]">
            {product.name}
          </p>
          <p className="text-sm font-medium text-[#A3B8A8]">
            <span className="mr-1 text-xs font-normal text-[#8E9A93]">
              Price:
            </span>
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MobileCard;
