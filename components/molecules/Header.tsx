"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import zzzLogo from "@/assets/images/zzz-logo.webp";
import { bg_blue_30, bg_blue_10 } from "../tokens";
import bangboo from "@/assets/images/profile.webp";
import useStore from "@/store/useStore";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { BookIcon, ListUnorderedIcon, MegaphoneIcon, PersonIcon, ThreeBarsIcon } from "@primer/octicons-react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("header");

  const handleLogin = () => {
    router.push("/login");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  const handleLanguageChange = () => {
    const currentLang = pathname.startsWith("/es") ? "es" : "en";
    const newLang = currentLang === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  const token = useStore((store) => store.token);
  const logout = useStore((store) => store.logout);

  return (
    <header className={`${bg_blue_30} fixed top-0 left-0 w-full z-10 md:relative md:w-64 h-16 md:h-full  flex md:flex-col`}>
  <div className="flex justify-between items-center p-4 w-full">
    <Link href="/" passHref>
      <Image
        src={zzzLogo}
        width={135}
        height={135}
        alt="Logo Zenless"
        className="h-auto w-auto"
        priority
      />
    </Link>

    <label htmlFor="menu-toggle" className="cursor-pointer md:hidden">
      <ThreeBarsIcon size={24} className="text-white" />
    </label>
  </div>

  <input type="checkbox" id="menu-toggle" className="peer hidden" />

  <aside
    className={`${bg_blue_30} peer-checked:block hidden md:block fixed md:static top-16 left-0 w-full md:w-64 h-[calc(100vh-4rem)] md:h-full flex flex-col p-4 overflow-y-auto`}
  >
    <nav className="flex flex-1 flex-col [&>[data-slot=section]+[data-slot=section]]:mt-8">
      <Link
        href="/zenless-zone-zero/guides"
        className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors"
        data-slot="section"
      >
        <BookIcon size={20} /> {t("guides")}
      </Link>
      <Link
        href="/zenless-zone-zero/tier-list"
        className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors"
        data-slot="section"
      >
        <ListUnorderedIcon size={20} /> {t("tier_list")}
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors"
        data-slot="section"
      >
        <MegaphoneIcon size={20} /> {t("news")}
      </Link>
      <Link
        href="/zenless-zone-zero/characters"
        className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors"
        data-slot="section"
      >
        <PersonIcon size={20} /> {t("characters")}
      </Link>
    </nav>

    <div className="flex flex-col items-center space-y-4 mt-auto">
      {token !== null ? (
        <>
          <div className="hidden md:flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5">
            <Link href="/profile" passHref className="flex items-center">
              <Image
                src={bangboo}
                width={45}
                height={45}
                alt={t("profile_alt")}
                className="h-auto border-2 rounded-full"
              />
            </Link>
          </div>
          <button
            className={`${bg_blue_10} h-10 px-4 font-semibold rounded-md text-white`}
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            {t("logout_button")}
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-blue-500 h-10 px-4 font-semibold rounded-md text-white"
            onClick={handleLogin}
          >
            {t("login_button")}
          </button>
          <button
            className="bg-blue-500 h-10 px-4 font-semibold rounded-md text-white"
            onClick={handleRegister}
          >
            {t("register_button")}
          </button>
        </>
      )}
      <button
        className="bg-gray-500 h-10 px-4 font-semibold rounded-md text-white"
        onClick={handleLanguageChange}
      >
        {t("language_button")}
      </button>
    </div>
  </aside>
</header>
  );
}
