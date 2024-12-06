'use client'
import Image from "next/image";
import { StaticImageData } from 'next/image';
import { bg_blue_60,bg_blue_30 } from '@/components/tokens'
import { useTranslations } from "next-intl";
import bangboo from "@/assets/images/profile.webp";
interface ProxyInfoProps {
    imagen: string | StaticImageData;
    username: string;
    nivel: number;
    uid: string;
}

export function ProxyInfo ({ imagen, username, nivel, uid }:ProxyInfoProps) {
    const t = useTranslations("proxy_info")
    return (
        <div className={`flex flex-col ${bg_blue_30} rounded-lg w-96 p-8`}>
        <Image
            src={bangboo}


            alt={`Avatar of ${username}`}
            width={96}
            height={96}
            className="w-24 h-24 mb-2 border-2 rounded-full object-cover mr-4"
        />
            <div className={`${bg_blue_60} rounded-[25px] font-mono`}>
                <div className="p-2 text-white">
                    <h2>{username}</h2>
                    <p>{t("level")}: {nivel}</p>
                    <p>{t("uid")}: {uid}</p>
                </div>   
            </div>
        </div>
        );
};
