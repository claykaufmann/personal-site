import type { Metadata } from "next";
import { Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clay Kaufmann",
  description: "Clay Kaufmann's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(openSans.variable, roboto.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
