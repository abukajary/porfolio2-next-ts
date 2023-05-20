import { useTranslations, NextIntlClientProvider } from "next-intl";
import ContactFrom from "../Сomponents/СontactsForm";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="w-70vw">
      <div className="grid lg:grid-cols-2 grid-rows-1 gap-x-[20px]">
        <div>
          <h1 className="text-5xl text-purple-600 my-[20px] lg:my-[40px] relative">
            {t("GetInTouch")}
          </h1>

          <p>tel: 77088071337</p>
          <p>email: jarylgapov.abubakir@gmail.com</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/Psychopath_Sleepwalker"
          >
            Telegram @Psychopath_Sleepwalker
          </a>
        </div>

        <div className="lg:px-[15px] pb-[40px] bg-white">
          <ContactFrom />
        </div>
      </div>
    </main>
  );
}
