"use client";
import { useCallback, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const t = useTranslations("Index");

  const router = useRouter();

  const changeLanguage = (language: string) => {
    router.push(language);
  };

  return (
    <div className="flex justify-between lg:my-[115px] my-4">
      <div className="flex justify-center items-center gap-4">
        <div className="font-medium text-3xl underline">abukajary.dev</div>
        <div>
          <button onClick={() => changeLanguage("en")}>en</button>
          /
          <button onClick={() => changeLanguage("ru")}>ru</button>
        </div>
      </div>
      <div className="lg:grid grid-flow-col gap-x-[32px] font-medium text-xl hidden">
        <Link href="/">{t("myWorks")}</Link>
        <Link href="/about">{t("aboutMe")}</Link>
        <Link href="/codeSnippet">{t("codeSnippet")}</Link>
        <Link href="/contacts">{t("contacts")}</Link>
      </div>
      <div
        className="flex justify-center items-center lg:hidden relative cursor-pointer"
        onClick={toggleOpen}
      >
        <AiOutlineMenu size={31} />

        {isOpen && (
          <div
            className="
            absolute 
            rounded-xl 
            shadow-md
            w-[200px]
            p-5
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm z-10
            
          "
          >
            <div className="flex flex-col">
              <Link className="p-2 cursor-pointer" href="/">
                {t("myWorks")}
              </Link>
              <Link className="p-2 cursor-pointer" href="/about">
                {t("aboutMe")}
              </Link>
              <Link className="p-2 cursor-pointer" href="/codeSnippet">
                {t("codeSnippet")}
              </Link>
              <Link className="p-2 cursor-pointer" href="/contacts">
                {t("contacts")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
