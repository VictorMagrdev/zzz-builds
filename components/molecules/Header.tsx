'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import zzzLogo from "@/assets/images/zzz-logo.webp"
import { bg_blue_30, bg_blue_10 } from '../tokens'
import bangboo from '@/assets/images/profile.webp'
import useStore from '@/store/useStore'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("header");

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const handleLanguageChange = () => {
    const currentLang = pathname.startsWith('/es') ? 'es' : 'en';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  const token = useStore((store) => store.token);
  const logout = useStore((store) => store.logout);

  return (
    <header className={`${bg_blue_30} p-4`}>
      <nav className='flex justify-between items-center max-w-screen-xl mx-auto flex-wrap'>
        <Link href="/" passHref className="flex items-center">
          <Image
            src={zzzLogo}
            width={120}
            height={120}
            alt="Logo Zenless"
            className='h-auto'
          />
        </Link>
        <ul className='flex space-x-10 text-lg items-center'>
          <li><Link href="/zenless-zone-zero/guides" className='text-white hover:text-gray-400 transition-colors'>{t("guides")}</Link></li>
          <li><Link href="/zenless-zone-zero/tier-list" className='text-white hover:text-gray-400 transition-colors'>{t("tier_list")}</Link></li>
          <li><Link href="#" className='text-white hover:text-gray-400 transition-colors'>{t("news")}</Link></li>
          <li><Link href="/zenless-zone-zero/characters" className='text-white hover:text-gray-400 transition-colors'>{t("characters")}</Link></li>
        </ul>
        <div className='flex items-center space-x-4'>
          {token !== null ? (
            <>
              <Link href="/profile" passHref className="flex items-center">
                <Image
                  src={bangboo}
                  width={45}
                  height={45}
                  alt={t("profile_alt")}
                  className='h-auto border-2 rounded-full'
                />
              </Link>
              <button
                className={`${bg_blue_10} h-10 px-4 font-semibold rounded-md text-white`}
                onClick={() => { logout(); router.push('/login') }}
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
      </nav>
    </header>
  );
}
