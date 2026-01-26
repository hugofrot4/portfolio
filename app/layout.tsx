import type { Metadata } from "next";
import { Newsreader, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Portfolio - por Hugo Frota",
  description: "Meu portfolio de projetos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
