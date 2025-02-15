import type { Metadata } from "next";
import "./globals.css";
import myFonts from "@/utils/fonts";
import Providers from "@/providers/providers";
export const metadata: Metadata = {
  title: "کتابستان",
  description: "فروشگاه کتاب کتابستان برای فروش کتاب",
  authors:{name:"AmirKhani"},
  icons:{icon:"./favicon.ico"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={` ${myFonts.className} antialiased bg-gray-100`}
      >
        <Providers >
            {children}
        </Providers>
      </body>
    </html>
  );
}
