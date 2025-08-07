"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("رمزهای عبور مطابقت ندارند.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (res.ok) {
        // On successful registration, redirect to login page
        router.push("/(auth)/login");
      } else {
        const data = await res.json();
        setError(data.message || "خطایی در ثبت نام رخ داد.");
      }
    } catch (err) {
      setError("خطای شبکه. لطفا دوباره تلاش کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            ایجاد حساب کاربری
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            به فروشگاه ما بپیوندید و از مزایای گیمیفیکیشن لذت ببرید!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              نام
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1"
              placeholder="نام خود را وارد کنید"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              ایمیل
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              رمز عبور
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              تکرار رمز عبور
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? "در حال ثبت نام..." : "ثبت نام"}
            </Button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          قبلا ثبت نام کرده‌اید؟{" "}
          <Link href="/(auth)/login" className="font-medium text-primary hover:underline">
            وارد شوید
          </Link>
        </p>
      </div>
    </div>
  );
}
