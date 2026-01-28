import type { Metadata } from "next";
import { Newsreader, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { daysSince } from "@/utils/daysSince";

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
  const days = daysSince(process.env.START_DATE);

  return (
    <html lang="pt-BR">
      <body
        className={`${newsreader.variable} ${playfairDisplay.variable} antialiased selection:bg-primary selection:text-white`}
      >
        <Navbar days={days} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
