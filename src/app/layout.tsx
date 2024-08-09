import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BasketProvider from "@/context/BasketContext";
import { AuthProvider } from "@/context/AuthContext";
import Header from "@/components/header";
import Footer from "@/components/footer";


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
      <body className={`${inter.className} bg-accentLight min-h-screen `}>
        <AuthProvider>
          <BasketProvider>
            <Header />
            <div className="flex flex-col items-center">
              {children}
            </div>
            <Footer />
          </BasketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
