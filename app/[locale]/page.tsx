import { bg_blue_30 } from "@/components/tokens"
import ZenlessIndex from "@/assets/images/ZenlessIndex.webp"
import Image from "next/image";
import React, { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("home_page");

  return (
    <>
    <main className={`flex flex-col max-w-5xl mx-auto h-screen p-4 mt-4 ${bg_blue_30}`}>
        <h1 className="text-2xl font-bold text-white drop-shadow-md">{t("title")}</h1>
        <Image
          src={ZenlessIndex}
          width={800} 
          alt={t("image_alt")}
          className="mt-2 shadow-lg shadow-blue-500/50 rounded-sm"
        />

    </main>
    </>
  );
}
