import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {
  Noto_Sans,
  Noto_Sans_Gujarati,
  Noto_Serif_Gujarati,
  Playfair_Display,
} from "next/font/google";

import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const notoSansGujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-noto-sans-gujarati",
});

const notoSerifGujarati = Noto_Serif_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-noto-serif-gujarati",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "SGK Activity Rajkot",
  description: "SGK Activity Rajkot"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="gu"
      className={`
        ${notoSans.variable}
        ${notoSansGujarati.variable}
        ${notoSerifGujarati.variable}
        ${playfairDisplay.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
