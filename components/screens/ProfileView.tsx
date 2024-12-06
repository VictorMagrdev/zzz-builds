'use client'
import { bg_blue_60,bg_blue_30 } from '@/components/tokens'
import { ProxyInfo } from "@/components";
import { getUserProfile } from "@/libs/api_general";
import useStore from '@/store/useStore';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import bangboo from "@/assets/images/profile.webp";


export default function ProfileView() {
    const token = useStore((store) => store.token);
    const [profile, setProfile]:any = useState(null);
    const t = useTranslations("profile_view")
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                let data = await getUserProfile(token);
                setProfile(data);
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            }
        };

        fetchProfile();
    }, [token]);

  if (!profile) return <div>Loading...</div>

    return (
        <div className={`flex flex-col ${bg_blue_60} space-y-6 min-h-screen p-4`}>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="flex justify-center">
            <ProxyInfo
                imagen={bangboo}
                username={profile.user}
                nivel={5}
                uid="12345"
            />
        </div>
        
        <div className={`rounded-lg p-6 ${bg_blue_30} space-y-4 font-mono text-white shadow-lg border border-white/20 w-full`}>
            <div>
                <a href="#" className="hover:text-blue-400 transition block">
                    {t("my_tier_list")} {">"}
                </a>
            </div>
            <hr className="border-white/20" />
            <div>
                <a href="#" className="hover:text-blue-400 transition block">
                    {t("my_news")} {">"}
                </a>
            </div>
            <hr className="border-white/20" />
            <div>
                <a href="#" className="hover:text-blue-400 transition block">
                    {t("my_guides")} {">"}
                </a>
            </div>
            <hr className="border-white/20" />
            <div>
                <a href="#" className="hover:text-blue-400 transition block">
                    {t("account_settings")}
                </a>
            </div>
        </div>

        <div className="flex flex-col space-y-4 xl:col-span-2">
            <div className="text-white text-lg font-semibold border-b pb-2 border-white/20">
                {t("social_links")}
            </div>
            <div className="text-white text-lg font-semibold border-b pb-2 border-white/20">
                {t("proxy_info")}
            </div>
        </div>
    </div>
</div>


    );
}
