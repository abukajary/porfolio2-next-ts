import "./globals.css";
import ClientOnly from "./Сomponents/ClientOnly";
import { Footer } from "./Сomponents/Footer";

import Header from "./Сomponents/Header";

export const metadata = {
  title: "Abubakir Zharylgapov | Portfolio",
  description:
    "Abubakir Zharylgapov Porfolio Абубакир Жарылгапов абубакир жарылгапов портфолио Портфолио",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="mx-[20px] md:mx-[50px] lg:mx-[115px]">
      <ClientOnly>
        <Header />
      </ClientOnly>

      <body>{children}</body>
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </html>
  );
}
