import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "INCEPTION 23 | Strategic Advisory",
  description: "Strategic Clarity for Leaders. Business Advisory, Legal Support, and IT Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning is critical here. 
    // It prevents crashes caused by browser extensions (like the bis_skin_checked error)
    // and dark mode/language mismatches on initial load.
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}