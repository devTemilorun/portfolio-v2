import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/scenes/Footer";
import Navigation from "@/scenes/Navigation";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",        
  weight: ["400", "500", "600", "700"], 
});

export const metadata: Metadata = {
  title: "devTemilorun | FullStack Developer",
  description: "Passionate Fullstack Developer focused on crafting accessible, high-performance, and user-centric interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextTopLoader/>
        <Navigation />
          {children}
        <Footer/>
      </body>
    </html>
  );
}