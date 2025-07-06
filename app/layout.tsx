import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Алекс Бетон — доставка стройматериалов и аренда техники в Духанино",
  description:
    "Бетон, песок, щебень, чернозём, аренда самосвалов и кранов с доставкой по Духанино и Истринскому району. Работаем с 2005 года. Звоните: +7 925 020-15-26",
  keywords:
    "бетон Духанино, щебень с доставкой, аренда самосвалов, аренда крана, стройматериалы Истра, чернозем купить, Алекс Бетон",
  robots: "index, follow",
  authors: [{ name: "Алекс Бетон" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Алекс Бетон — стройматериалы и техника с доставкой",
    description:
      "Песок, щебень, бетон, чернозем и техника — с доставкой по МО. +7 925 020-15-26",
    url: "https://alexbeton.com",
    siteName: "Алекс Бетон",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
