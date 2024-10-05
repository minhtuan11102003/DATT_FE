import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Roboto, Karla,  Playfair_Display, Lora} from "next/font/google";
import HeaderComponent from "../components/page/header";
import FooterComponent from "../components/page/footer";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-Lora',
  display: 'swap'
})

const PlayfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-PlayfairDisplay',
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
    <html lang="vi" className={`${karla.variable} ${PlayfairDisplay.variable} ${lora.variable}`}>
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body
        suppressHydrationWarning={true}
        className={`${nunito.className} text-primary !scroll-smooth`}
      >
        <div className="w-full">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
