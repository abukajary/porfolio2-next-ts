"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between my-[115px]">
      <div className="font-medium text-3xl underline">abukajary.</div>
      <div className="grid grid-flow-col gap-x-[32px] font-medium text-xl">
        <Link href="/">Мои работы</Link>
        <Link href="/about">Обо мне</Link>
        <Link href="/codeSnippet">Сниппеты кода</Link>
        <Link href="/contacts">Контакты</Link>
      </div>
    </div>
  );
};
export default Header;
