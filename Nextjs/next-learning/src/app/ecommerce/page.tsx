import MobileCard from "@/components/MobileCard";
import { products } from "@/constants/data";
import React from "react";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-[#1B211F] px-4 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-[#38433E] pb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-[#E4E8E2] sm:text-3xl">
            Select the phone for you
          </h2>
        </div>
        <section className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <MobileCard product={p} key={p.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Ecommerce;
