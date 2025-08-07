"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { mockProducts } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = mockProducts.find((p) => p.id === parseInt(params.id, 10));

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Optional: Add a toast notification or some user feedback here
    console.log(`${quantity} of ${product.productName} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image Column */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.imageUrl}
            alt={product.productName}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Column */}
        <div className="flex flex-col h-full text-right">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {product.productName}
          </h1>
          <p className="text-2xl font-semibold text-primary mb-6">
            {product.price.toLocaleString("fa-IR")} تومان
          </p>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            این یک توضیح نمونه برای محصول است. در اینجا جزئیات بیشتری در مورد ویژگی‌ها، کیفیت ساخت و مزایای استفاده از این محصول قرار می‌گیرد تا کاربر برای خرید ترغیب شود.
          </p>

          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="bg-yellow-100 border-r-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-6" role="alert">
              <p className="font-bold">با خرید این محصول {product.points} امتیاز کسب کنید!</p>
            </div>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                className="w-24 text-center"
                aria-label="تعداد"
              />
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                افزودن به سبد خرید
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
