import type { Metadata } from "next";
import { Geist, Geist_Mono, Bowlby_One_SC, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SVGFilters } from "@/components/svgs/SVGFilters";
import Footer from "@/components/common/Footer";

const getBowl = Bowlby_One_SC({
  variable: "--font-bowl",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const getMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Suburbia",
  description: "Best Skateboard Spot in Suburbia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getMono.variable} ${getBowl.variable} antialiased font-mono font-medium `}
      >
        <main>
          <Header />
          {children}
          <Footer />
        </main>
        <SVGFilters />
      </body>
    </html>
  );
}
