import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { bg_blue_60 } from "@/components/tokens";
import Header from "@/components/molecules/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bienvenido a ZZZ Builds",
  description: "Crea Guias enfocadas a Zenless Zone Zero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bg_blue_60} ${inter.className}`}>
        <Header/>
        {children}
        </body>
    </html>
  );
}