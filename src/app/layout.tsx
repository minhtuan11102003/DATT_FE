import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Roboto } from 'next/font/google'
import HeaderComponent from "../components/page/header";
import FooterComponent from "../components/page/footer";

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Dự án thực tập",
  description: "Admin app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${nunito.className} text-primary !scroll-smooth`}>
        <div className="w-full">
          <HeaderComponent/>
            {children}
          <FooterComponent/>
        </div>
      </body>
    </html>
  );
}
