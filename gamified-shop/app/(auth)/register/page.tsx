import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function RegisterPage() {
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
        <form className="space-y-6">
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
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              تکرار رمز عبور
            </label>
            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="mt-1"
            />
          </div>
          <div>
            <Button type="submit" className="w-full" size="lg">
              ثبت نام
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
