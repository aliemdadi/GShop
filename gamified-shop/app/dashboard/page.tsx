"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Mock data for badges
const mockBadges = [
  { name: "خرید اول", icon: "🥇", description: "اولین خرید خود را تکمیل کردید" },
  { name: "مشتری وفادار", icon: "💖", description: "بیش از ۵ خرید موفق" },
  { name: "متخصص تجهیزات", icon: "🎮", description: "حداقل یک آیتم از هر دسته خریده‌اید" },
  { name: "نظر اولیه", icon: "✍️", description: "اولین نظر خود را ثبت کردید" },
  { name: "شکارچی امتیاز", icon: "🎯", description: "بیش از ۱۰۰۰ امتیاز کسب کردید" },
];

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/(auth)/login");
    }
  }, [isAuthenticated, router]);

  if (!user) {
    // Render a loading state or null while redirecting
    return <p className="text-center p-12">در حال بارگذاری...</p>;
  }

  const levelProgress = (user.points % 1000) / 10; // Example: 1000 points per level

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">داشبورد کاربری</h1>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="text-center md:text-right">
            <h2 className="text-3xl font-bold text-primary">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="flex-grow text-center">
            <p className="text-lg font-semibold">سطح: {user.level}</p>
            <p className="text-lg font-semibold">امتیاز: {user.points.toLocaleString("fa-IR")}</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${levelProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">{1000 - (user.points % 1000)} امتیاز تا سطح بعدی</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center md:text-right">نشان‌های شما</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {mockBadges.map((badge) => (
              <div key={badge.name} className="p-4 bg-gray-50 rounded-lg flex flex-col items-center justify-center border hover:shadow-lg transition-shadow">
                <span className="text-5xl mb-2">{badge.icon}</span>
                <p className="font-semibold">{badge.name}</p>
                <p className="text-xs text-gray-500">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
