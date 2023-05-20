import { myWorksData } from "./api/myWorksData";
import { DefaultCard } from "./Сomponents/DefaultCard";
import { useTranslations } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Index");
  return (
    <main>
      <h1 className="text-5xl text-purple-600 my-[40px] relative">
        {t("hello")} {t("myWorks")}
      </h1>
      <div className="mt-5">
        <svg
          width="34"
          height="39"
          viewBox="0 0 34 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2187 0.181824H14.4176V29.2102L3.31959 18.1122L0.0326538 21.4361L16.8182 38.2216L33.6406 21.4361L30.2798 18.1122L19.2187 29.2102V0.181824Z"
            fill="#181717"
          />
        </svg>
      </div>

      {myWorksData.map((data, key) => {
        if (data.locale === locale) {
          return (
            <div key={key}>
              <DefaultCard
                key={key}
                title={data.title}
                text={data.text}
                image={data.image}
                subText={data.subtext}
                linkText={data.linkText}
                linkUrl={data.linkUrl}
              />
            </div>
          );
        }
      })}
    </main>
  );
}
