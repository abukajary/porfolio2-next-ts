"use client";
import { useCallback, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="flex justify-between lg:my-[115px] my-4">
      <div className="font-medium text-3xl underline">abukajary.</div>
      <div className="lg:grid grid-flow-col gap-x-[32px] font-medium text-xl hidden">
        <Link href="/">Мои работы</Link>
        <Link href="/about">Обо мне</Link>
        <Link href="/codeSnippet">Сниппеты кода</Link>
        <Link href="/contacts">Контакты</Link>
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
                Мои работы
              </Link>
              <Link className="p-2 cursor-pointer" href="/about">
                Обо мне
              </Link>
              <Link className="p-2 cursor-pointer" href="/codeSnippet">
                Сниппеты кода
              </Link>
              <Link className="p-2 cursor-pointer" href="/contacts">
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
