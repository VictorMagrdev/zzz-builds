"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import zzzLogo from "@/assets/images/zzz-logo.webp";
import { bg_blue_30, bg_blue_10 } from "../tokens";
import bangboo from "@/assets/images/profile.webp";
import useStore from "@/store/useStore";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ThreeBarsIcon } from "@primer/octicons-react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("header");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement | null>(null); 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); 

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
    <div>
      <button
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleSidebarToggle}
      >
        <span className="sr-only">Open sidebar</span>
      </button>
      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <ThreeBarsIcon size={24} />

</button>
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
         <Link href="/" passHref className="flex items-center" onClick={() => setIsSidebarOpen(false)}>
                <Image
                  src={zzzLogo}
                  width={120}
                  height={120}
                  alt="Logo Zenless"
                  className="max-h-full max-w-full h-auto w-auto"
                  priority
                />
              </Link>
         </li>
         <li>
         <Link
                href="/zenless-zone-zero/guides"
                className="text-white hover:text-gray-400 transition-colors"
                onClick={() => setIsSidebarOpen(false)} 
              >
                {t("guides")}
              </Link>
         </li>

            
         <li>
         <Link
                href="/zenless-zone-zero/tier-list"
                className="text-white hover:text-gray-400 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                {t("tier_list")}
              </Link>
         </li>
         <li>
         <Link
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                {t("news")}
              </Link>
         </li>
         <li>
         <Link
                href="/zenless-zone-zero/characters"
                className="text-white hover:text-gray-400 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                {t("characters")}
              </Link>
         </li>
         <li>
         <div className="flex flex-col items-center space-y-4 mt-auto">
                {token !== null ? (
                  <>
                    <Link href="/profile" passHref className="flex items-center" onClick={() => setIsSidebarOpen(false)}>
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
         </li>
      </ul>
   </div>
</aside>
    </div>
  );
}


