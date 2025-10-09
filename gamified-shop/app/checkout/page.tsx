"use client";

import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

export default function CheckoutPage() {
  const { isAuthenticated } = useAuth();
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/(auth)/login");
    }
    if (isAuthenticated && cartItems.length === 0) {
      router.push("/cart");
    }
  }, [isAuthenticated, cartItems, router]);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // In a real app, you would submit the order to the backend here.
    // For now, we just clear the cart and redirect.
    console.log("Placing mock order...");
    clearCart();
    router.push("/checkout/success");
  };

  if (!isAuthenticated || cartItems.length === 0) {
    return <p className="text-center p-12">در حال انتقال...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">تسویه حساب</h1>
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Forms Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-right">اطلاعات ارسال</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="نام" required />
              <Input placeholder="نام خانوادگی" required />
              <Input className="md:col-span-2" placeholder="آدرس" required />
              <Input placeholder="شهر" required />
              <Input placeholder="کد پستی" required />
            </form>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-right">اطلاعات پرداخت</h2>
            <form className="space-y-4">
              <Input placeholder="شماره کارت" required />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="MM / YY" required />
                <Input placeholder="CVC" required />
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary Column */}
        <div className="lg:col-span-1">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md sticky top-24">
            <h2 className="text-2xl font-bold mb-6">خلاصه سفارش</h2>
            <div className="space-y-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.productName} x{item.quantity}</span>
                  <span>{(item.price * item.quantity).toLocaleString("fa-IR")}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-xl border-t mt-4 pt-4">
              <span>مبلغ قابل پرداخت</span>
              <span>{subtotal.toLocaleString("fa-IR")} تومان</span>
            </div>
            <Button size="lg" className="w-full mt-6" onClick={handlePlaceOrder}>
              پرداخت و ثبت نهایی سفارش
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
