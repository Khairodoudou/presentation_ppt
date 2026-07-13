import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "منصة وطنية ذكية للإيواء والسياحة | الجزائر",
  description:
    "منصة وطنية ذكية للإيواء والسياحة تعتمد على التحول الرقمي والذكاء الاصطناعي لربط جميع الفاعلين في القطاع داخل منظومة رقمية موحدة",
  keywords: "سياحة, جزائر, فنادق, ذكاء اصطناعي, رقمنة, إيواء",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} scroll-smooth`}>
      <body className="flex flex-col antialiased bg-background text-foreground min-h-screen">{children}</body>
    </html>
  );
}
