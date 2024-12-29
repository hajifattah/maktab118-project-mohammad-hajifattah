import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ToastifyProvider } from "@/providers/toastify.provider";
import { ReduxToolkitProvider } from "@/providers/redux.provider";
import { TanstackProvider } from "@/providers/queryclientProvider";

const vazir = Vazirmatn({ subsets: ["arabic"] });

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
      <body className={`${vazir.className} antialiased`}>
        <ReduxToolkitProvider>
          <TanstackProvider>
          <ToastifyProvider>{children}</ToastifyProvider>
          </TanstackProvider>
        </ReduxToolkitProvider>
      </body>
    </html>
  );
}
