import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        brand: {
          950: "#0D0121",
          900: "#1A023B",
          700: "#36057A", // Core Brand Identity
          600: "#4D08AB",
          500: "#6B21A8",
          100: "#F2E6FF",
          50: "#FAF5FF",
        },
        night: {
          950: "#020617", // Slate-based Black for OLED feel
          900: "#0f172a",
          800: "#1e293b",
        },
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(circle at 50% 50%, rgba(54, 5, 122, 0.15) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;