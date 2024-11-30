import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google'
import "./globals.css";
import { ToastifyProvider } from "@/providers/toastify.provider";

const vazir = Vazirmatn({subsets:['arabic']})

export const metadata: Metadata = {
  title: "Supermarket Next App",
  description: "create supermarket app with next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className={`${vazir.className} antialiased`}
      >
        <ToastifyProvider>{children}</ToastifyProvider>
      </body>
    </html>
  );
}
