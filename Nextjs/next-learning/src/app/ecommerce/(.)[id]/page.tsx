import { products } from "@/constants/data";
import { X } from "lucide-react";
import { Calligraffitti } from "next/font/google";
import { Suspense } from "react";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

const InterceptingProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;
  const lastId = id.slice(-1);

  const product = products.find((p) => p.id === +lastId);
  console.log("id", id);
  console.log("product", products);
  if (!product) {
    return (
      <p className="min-h-screen bg-[#1B211F] px-4 py-20 text-center text-sm text-[#8E9A93]">
        Product not found...
      </p>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#0F1311]/70 backdrop-blur-sm">
      <div className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#38433E] bg-[#242C29] text-[#E4E8E2] transition hover:border-[#A3B8A8]/50 hover:text-[#A3B8A8] sm:right-6 sm:top-6">
        <X className="h-5 w-5" />
      </div>

      <div className="absolute left-1/2 top-1/2 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-[#38433E] bg-[#242C29] shadow-2xl shadow-black/50">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover"
        />
        <p className="px-5 pt-5 text-lg font-semibold tracking-tight text-[#E4E8E2]">
          {product.name}
        </p>
        <p className="px-5 pb-5 pt-1.5 text-base font-semibold text-[#A3B8A8]">
          Price: {product.price}
        </p>
      </div>
    </div>
  );
};

export default function InterceptingProductDetails({
  params,
}: ProductPageProps) {
  return (
    <Suspense
      fallback={
        <p className="min-h-screen bg-[#1B211F] px-4 py-20 text-center text-sm text-[#8E9A93]">
          Loading...
        </p>
      }
    >
      <InterceptingProductPage params={params} />
    </Suspense>
  );
}
