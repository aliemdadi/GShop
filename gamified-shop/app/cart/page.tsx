"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">سبد خرید شما</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">سبد خرید شما خالی است.</p>
          <Link href="/products">
            <Button>مشاهده محصولات</Button>
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center gap-6 p-4 border rounded-lg">
                  <Image src={item.imageUrl} alt={item.productName} width={100} height={100} className="rounded-md" />
                  <div className="flex-grow text-right">
                    <h2 className="text-lg font-semibold">{item.productName}</h2>
                    <p className="text-primary">{item.price.toLocaleString("fa-IR")} تومان</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-20 text-center"
                    />
                    <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                      حذف
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-1">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md sticky top-24">
              <h2 className="text-2xl font-bold mb-6">جمع کل</h2>
              <div className="flex justify-between mb-4">
                <span>جمع جزء ({totalItems} کالا)</span>
                <span>{subtotal.toLocaleString("fa-IR")} تومان</span>
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4">
                <span>مبلغ قابل پرداخت</span>
                <span>{subtotal.toLocaleString("fa-IR")} تومان</span>
              </div>
              <Button size="lg" className="w-full mt-6">
                ادامه جهت تسویه حساب
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
