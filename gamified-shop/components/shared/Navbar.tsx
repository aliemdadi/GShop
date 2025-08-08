"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              فروشگاه
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8 md:mr-auto">
            <Link href="/" className="font-medium text-foreground hover:text-primary transition-colors">
              خانه
            </Link>
            <Link href="/products" className="font-medium text-foreground hover:text-primary transition-colors">
              محصولات
            </Link>
            {isAuthenticated && (
              <Link href="/dashboard" className="font-medium text-foreground hover:text-primary transition-colors">
                داشبورد
              </Link>
            )}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
                <CartIcon />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                    {totalItems}
                  </span>
                )}
              </Link>

              {isAuthenticated ? (
                <>
                  <span className="text-sm font-medium">سلام، {user?.name}</span>
                  <Button variant="secondary" size="sm" onClick={handleLogout}>خروج</Button>
                </>
              ) : (
                <Link href="/(auth)/login">
                  <Button variant="primary">ورود / ثبت‌نام</Button>
                </Link>
              )}
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={cn("md:hidden", { block: isMenuOpen, hidden: !isMenuOpen })}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
            خانه
          </Link>
          <Link href="/products" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
            محصولات
          </Link>
          <Link href="/cart" className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
            <CartIcon />
            <span>سبد خرید ({totalItems})</span>
          </Link>
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
                داشبورد
              </Link>
              <button onClick={handleLogout} className="w-full text-right block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
                خروج
              </button>
            </>
          ) : (
            <Link href="/(auth)/login" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
              ورود / ثبت‌نام
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
