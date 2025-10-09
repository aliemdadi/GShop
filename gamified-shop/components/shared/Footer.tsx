import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-lg font-bold text-foreground">فروشگاه گیمیفای</h3>
            <p className="mt-2 text-sm text-gray-600">
              تجربه خرید خود را به یک بازی هیجان‌انگیز تبدیل کنید.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">لینک‌های مفید</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary">درباره ما</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary">تماس با ما</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-primary">سوالات متداول</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">ما را دنبال کنید</h3>
            <div className="flex justify-center md:justify-end mt-2 space-x-4 space-x-reverse">
              {/* Placeholder for social icons */}
              <Link href="#" className="text-gray-500 hover:text-primary">Icon1</Link>
              <Link href="#" className="text-gray-500 hover:text-primary">Icon2</Link>
              <Link href="#" className="text-gray-500 hover:text-primary">Icon3</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} فروشگاه گیمیفای. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
