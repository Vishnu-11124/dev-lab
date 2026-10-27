import GoBackButton from "@/components/GoBackButton";
import { products } from "@/constants/data";
import { Product } from "@/types/type";
import { ArrowLeft } from "lucide-react";

import React, { Suspense } from "react";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const product = products.find((p) => p.id === +id);
  if (!product) {
    return (
      <p className="min-h-screen bg-[#1B211F] px-4 py-20 text-center text-sm text-[#8E9A93]">
        Product not found
      </p>
    );
  }
  return (
    <div className="min-h-screen bg-[#1B211F] px-4 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:grid md:grid-cols-2 md:gap-x-12 md:[&>*:first-child]:col-span-2">
        <GoBackButton />
        <div className="flex gap-3 overflow-hidden rounded-2xl border border-[#38433E] bg-[#242C29] md:row-span-2">
          <img
            src={product.image}
            alt="product image"
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="md:self-start">
          <h3 className="text-3xl font-semibold tracking-tight text-[#E4E8E2] sm:text-4xl">
            {product.name}
          </h3>
          <p className="mt-3 text-xl font-semibold text-[#A3B8A8]">
            Price: {product.price}
          </p>
          <div className="mt-6 border-t border-[#38433E] pt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8E9A93]">
              Description
            </p>
            <p className="text-sm leading-relaxed text-[#C9D0CB]">
              {product.description}
            </p>
          </div>
        </div>
        <button className="w-full rounded-lg bg-[#A3B8A8] px-4 py-3.5 text-sm font-semibold text-[#1B211F] transition hover:bg-[#B4C7B9] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#A3B8A8]/30 active:scale-[0.99] md:self-start">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  return (
    <Suspense
      fallback={
        <p className="min-h-screen bg-[#1B211F] px-4 py-20 text-center text-sm text-[#8E9A93]">
          Loading...
        </p>
      }
    >
      <ProductPage params={params} />
    </Suspense>
  );
};

export default ProductDetails;
