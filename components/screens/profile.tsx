'use client'
import type { Metadata } from "next";
import { bg_blue_60,bg_blue_30 } from '@/components/tokens'
import { ProxyInfo } from "@/components";
import Ben from "@/assets/images/Ben.png"
import useStore from "@/store/useStore";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export const metadata: Metadata= {
  title: 'Profile',
  description: 'Profile info',
}


export default function Profile() {
    const token = useStore((store) => store.token);
    useEffect(() => {
        if (!token) {
          redirect("/");
        }
      }, [token]);
    return (
        <div className={`flex flex-col ${bg_blue_60} space-y-4 min-h-screen`} >
            <div className="m-8 grid grid-rows-2 grid-flow-col gap-x-0 gap-y-4">
                <ProxyInfo
                    imagen={Ben}
                    username="Usuario123"
                    nivel={5}
                    uid="12345"
                />
                <div className={`rounded-lg max-w-md p-8 ${bg_blue_30} space-y-2 font-mono w-96 min-h-80 text-white`}>
                    <div><a href="#">my tier list {">"}</a></div>
                    <hr/>
                    <div><a href="#">my news {">"}</a></div>
                    <hr/>
                    <div><a href="#">my guides {">"}</a></div>
                    <hr/>
                    <div><a href="#">account settings</a></div>
                    <hr/>
                </div>
                <div className="place-self-start col-span-2 text-white">
                    <div>social links</div>
                </div>
                <div className="place-self-start col-span-2 text-white">
                    <div>proxy info</div>
                </div>
            </div>
        </div>
    );
}
