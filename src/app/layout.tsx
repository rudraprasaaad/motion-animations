import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ViewTransitions } from "@/components/view-transitions";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A perfect portfolio website template that showcases your skills, minimal and smooth microintercations",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(inter.variable, geistMono.variable, "font-sans", geist.variable)}>
      <body className="antialiased bg-neutral-700 dark:bg-neutral-100">
        <ViewTransitions>
          <Navbar />
          <Suspense fallback={null}>{children}</Suspense>
        </ViewTransitions>
      </body>
    </html>
  );
}
