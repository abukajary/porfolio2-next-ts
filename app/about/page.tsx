export default function Home() {
  return (
    <main className="grid grid-flow-col  gap-x-[124px] pb-[134px] border-b-[2px] border-black">
      <div className="grid gap-y-[32px]">
        <h1 className="text-5xl text-purple-600 my-[40px] relative">
          Привет! Я Фронтенд Разработчик
        </h1>
        <p className="mt-6 text-xl leading-8">
          Меня зовут Абубакир Жарылгапов, занимаюсь созданием сайтов уже 2 года
          и имею 6 месяцев профессионального опыта.
          <br />
          <br />
          Помимо Фронтенд разработки, есть базовые навыки backend и DBMS на
          языках python и MYSQL.
        </p>
        <div className="grid grid-cols-2 font-normal text-base leading-[121.5%] tracking-tighter">
          <span className="underline">Main Skills</span>
          <p>HTML, CSS, JS, React.js, Next.js, TypeScript</p>
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
      <div className="">
        <img
          className="w-full"
          src="https://cdni.iconscout.com/illustration/premium/thumb/developer-working-on-laptop-4550302-3779206.png"
          alt=""
        />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
