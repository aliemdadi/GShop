import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#6D28D9",
          hover: "#5B21B6",
        },
        secondary: {
          DEFAULT: "#6B7280",
          hover: "#4B5563",
        },
        destructive: {
          DEFAULT: "#DC2626",
          hover: "#B91C1C",
        },
        success: {
          DEFAULT: "#16A34A",
          hover: "#15803D",
        },
        background: "#F9FAFB",
        foreground: "#111827",
      },
    },
  },
  plugins: [],
};
export default config;
