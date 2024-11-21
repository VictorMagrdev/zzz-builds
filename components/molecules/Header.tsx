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
    <header className={`${bg_blue_30} fixed h-full w-64 p-4 flex flex-col justify-between`}>
      <div className="flex flex-col items-center mb-8">
        <Link href="/" passHref className="flex items-center">
          <Image
            src={zzzLogo}
            width={120}
            height={120}
            alt="Logo Zenless"
            className="max-h-full max-w-full h-auto w-auto"
            priority
          />
        </Link>
      </div>

      <nav className="flex flex-col space-y-4">
        <Link href="/zenless-zone-zero/guides" className="text-white hover:text-gray-400 transition-colors">
          {t("guides")}
        </Link>
        <Link href="/zenless-zone-zero/tier-list" className="text-white hover:text-gray-400 transition-colors">
          {t("tier_list")}
        </Link>
        <Link href="#" className="text-white hover:text-gray-400 transition-colors">
          {t("news")}
        </Link>
        <Link href="/zenless-zone-zero/characters" className="text-white hover:text-gray-400 transition-colors">
          {t("characters")}
        </Link>
      </nav>

      <div className="flex flex-col items-center space-y-4 mt-auto">
        {token !== null ? (
          <>
            <Link href="/profile" passHref className="flex items-center">
              <Image
                src={bangboo}
                width={45}
                height={45}
                alt={t("profile_alt")}
                className="h-auto border-2 rounded-full"
              />
            </Link>
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
    </header>
  );
}