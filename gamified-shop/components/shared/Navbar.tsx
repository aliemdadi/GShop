"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/(auth)/register">
                <Button variant="primary">ورود / ثبت‌نام</Button>
              </Link>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu - will use simple lines for now */}
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
          <Link href="/(auth)/register" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50">
            ورود / ثبت‌نام
          </Link>
        </div>
      </div>
    </header>
  );
}
