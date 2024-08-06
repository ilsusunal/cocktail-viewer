import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BasketProvider } from "@/context/BasketContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Cocktail Viewer",
  description: "Created by İlsu for technical assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-200 min-h-screen `}>
        <BasketProvider>
          <Header />
          <div className="flex flex-col items-center">
            {children}
          </div>
          <Footer />
        </BasketProvider>
      </body>
    </html>
  );
}
