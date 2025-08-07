import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            ورود به حساب کاربری
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            خوش آمدید! برای ادامه وارد شوید.
          </p>
        </div>
        <form className="space-y-6">
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
              autoComplete="current-password"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Button type="submit" className="w-full" size="lg">
              ورود
            </Button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          حساب کاربری ندارید؟{" "}
          <Link href="/(auth)/register" className="font-medium text-primary hover:underline">
            ثبت نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}
