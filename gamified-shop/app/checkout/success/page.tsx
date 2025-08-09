import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-6xl mb-4 text-green-500">
          ✔
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          سفارش شما با موفقیت ثبت شد!
        </h1>
        <p className="text-gray-600 mb-8">
          از خرید شما متشکریم. به زودی جزئیات سفارش از طریق ایمیل برایتان ارسال خواهد شد.
        </p>
        <Link href="/">
          <Button size="lg">بازگشت به صفحه اصلی</Button>
        </Link>
      </div>
    </div>
  );
}
