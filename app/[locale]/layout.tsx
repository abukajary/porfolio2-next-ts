import "./globals.css";
import ClientOnly from "./Сomponents/ClientOnly";
import { Footer } from "./Сomponents/Footer";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import Header from "./Сomponents/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Abubakir Zharylgapov | Portfolio",
  description: "Мое портфолио",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className="mx-[20px] md:mx-[50px] lg:mx-[115px] 3xl:mx-auto 3xl:max-w-[1920px] 3xl:text-3xl"
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ClientOnly>
          <Header />
        </ClientOnly>
      </NextIntlClientProvider>

      <body>{children}</body>

      <NextIntlClientProvider locale={locale} messages={messages}>
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </NextIntlClientProvider>
    </html>
  );
}
