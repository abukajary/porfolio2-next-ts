import "./globals.css";
import ClientOnly from "./Сomponents/ClientOnly";
import { Footer } from "./Сomponents/Footer";

import Header from "./Сomponents/Header";

export const metadata = {
  title: "Abubakir Zharylgapov | Portfolio",
  description: "Мое портфолио",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="mx-[20px] md:mx-[50px] lg:mx-[115px] 3xl:mx-auto 3xl:max-w-[1920px] 3xl:text-3xl"
    >
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
