import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-flow-col  gap-x-[124px] pb-6 lg:pb-[134px] border-b-[2px] border-black">
      <div className="grid gap-y-[32px]">
        <h1 className="text-5xl text-purple-600 my-[20px] lg:my-[40px] relative">
          Привет! Я Фронтенд Разработчик
        </h1>
        <p className="lg:mt-6 text-xl leading-8">
          Меня зовут Абубакир Жарылгапов, занимаюсь созданием сайтов уже 2 года
          и имею 6 месяцев профессионального опыта.
          <br />
          <br />
          Помимо Фронтенд разработки, есть базовые навыки backend и DBMS на
          языках python и MYSQL.
        </p>
        <div className="grid grid-cols-2 font-normal text-base leading-[121.5%] tracking-tighter">
          <span className="underline">Main Skills</span>
          <p>HTML, CSS, SCSS, JS, React.js, Next.js, TypeScript</p>
        </div>

        <div className="grid grid-cols-2 font-normal text-base leading-[121.5%] tracking-tighter">
          <span className="underline">Soft Skills</span>
          <p>
            Работа в команде, навыки общения, навыки адаптации, межличностный
          </p>
        </div>

        <div className="grid grid-cols-2 font-normal text-base leading-[121.5%] tracking-tighter">
          <span className="underline">Main Software</span>
          <p>VSCode или Webstorm, Figma, Adobe XD </p>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image width={1500} height={1000} alt="dev" src="/img/developer-working-on-laptop.webp"></Image>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
