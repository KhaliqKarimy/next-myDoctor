import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import HeaderComponent from "@/components/header/header.component";
import "@/styles/typography.css";
import "./globals.css";
import FooterComponent from "@/components/footer/footer.component";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکتر من ",
  description: "پلتفورم جامع دکتر من ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <HeaderComponent />
        <main>{children}</main>
        <p className={"tag"}>
          نوبت دهی پزشکی، سامانه جستجو و نوبت دهی اینترنتی پزشکان
        </p>
        <FooterComponent/>
      </body>
    </html>
  );
}
