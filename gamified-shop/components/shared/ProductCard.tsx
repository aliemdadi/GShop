"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { mockProducts, Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { id, productName, price, imageUrl, points, stock } = product;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart(product);
    console.log(`Added product ${id} to cart`);
  };

  return (
    <Link href={`/products/${id}`} className="block">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-2xl h-full flex flex-col">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={productName}
            width={400}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="absolute top-2 right-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
            {points} امتیاز هدیه
          </div>
        </div>
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2 text-right text-gray-800">
            {productName}
          </div>
          <p className="text-gray-700 text-base text-right">
            {price.toLocaleString("fa-IR")} تومان
          </p>
          {stock && stock < 10 && (
            <p className="text-red-500 text-sm font-bold text-right mt-2 animate-pulse">
              موجودی محدود! فقط {stock} عدد باقی مانده!
            </p>
          )}
        </div>
        <div className="px-6 pt-4 pb-5">
          <Button onClick={handleAddToCart} className="w-full" variant="primary">
            افزودن به سبد خرید
          </Button>
        </div>
      </div>
    </Link>
  );
}
