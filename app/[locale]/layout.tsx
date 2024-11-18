import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { bg_blue_60 } from "@/components/tokens";
import Header from "@/components/molecules/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bienvenido a ZZZ Builds",
  description: "Crea Guias enfocadas a Zenless Zone Zero",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const message = await getMessages();

  return (
    <NextIntlClientProvider messages={message}>
      <html lang="en">
        <body className={`${bg_blue_60} ${inter.className} h-screen`}>
          <div className="flex h-full">
              <Header />
            <main className="flex-1 p-4 overflow-auto">
              {children}
            </main>
          </div>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
