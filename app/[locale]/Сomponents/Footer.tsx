"use client";
import { useTranslations } from "next-intl";
export const Footer = () => {
  const t = useTranslations("Index");
  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-10 gap-y-4 lg:gap-y-[170px] text-2xl font-normal text-gray-900 py-6">
      <div className="max-w-[380px]">
        <span className="">{t("ansYrProject")} </span>
      </div>
      <div className="lg:text-right">
        <p className="text-sm sm:text-lg   lg:text-2xl">
          jarylgapov.abubakir@gmail.com
        </p>
        <div className="font-weight-normal text-base text-gray-800 underline">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hh.kz/resume/48e7935bff09ebe23c0039ed1f43494166324f"
            className="text-right"
          >
            View Resume
          </a>
        </div>
      </div>
      <div className="font-medium text-lg text-blue-600">
        Abubakir Jarylgapov - 2023
      </div>
      <div className="flex lg:justify-end gap-8 font-medium lg:text-lg text-sm">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://t.me/Psychopath_Sleepwalker"
        >
          Telegram
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/abubakir-jarylgapov-0508331b1/"
        >
          LinkedIn
        </a>
        <a rel="noreferrer" target="_blank" href="https://github.com/abukajary">
          Github
        </a>
      </div>
    </div>
  );
};
