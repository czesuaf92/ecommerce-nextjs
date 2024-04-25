import type { Metadata } from "next";
import "styles/globals.css";

import localFont from 'next/font/local';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const satoshiFont = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
});



export const metadata: Metadata = {
  title: "CandleShop",
  description: "Świeczki na każdą okazję nawet tą ostatnią.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshiFont.className}`}>
      <body>
        <div
          id="page-container"
          className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100"
        >
          <Header />
          {/* <OldHeader /> */}
          {children}
          <Footer />
        </div>
      </body >

    </html >
  );
}
