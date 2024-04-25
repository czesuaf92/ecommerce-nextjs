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
          <main id="page-content" className="flex max-w-full flex-auto flex-col">
            <div className="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
              <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-64 text-gray-400">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body >

    </html >
  );
}
