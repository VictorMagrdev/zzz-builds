import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { bg_blue_60,bg_blue_30,bg_blue_10 } from '@/components/tokens'
import { ProxyInfo } from "@/components";

export const metadata: Metadata= {
  title: 'Profile',
  description: 'Profile info',
}


export default function Profile() {
    return (
        <div className={`flex flex-col ${bg_blue_60} space-y-4 min-h-screen`} >
            <Header/>
            <div className="m-8 grid grid-rows-2 grid-flow-col gap-x-0 gap-y-4">
                <ProxyInfo
                    imagen="/assets/images/Ben.png"
                    username="Usuario123"
                    nivel={5}
                    uid="12345"
                />
                <div className={`rounded-lg max-w-md p-8 ${bg_blue_30} space-y-2 font-mono w-96 min-h-80`}>
                    <div><a href="#">my tier list {">"}</a></div>
                    <hr/>
                    <div><a href="#">my news {">"}</a></div>
                    <hr/>
                    <div><a href="#">my guides {">"}</a></div>
                    <hr/>
                    <div><a href="#">account settings</a></div>
                    <hr/>
                </div>
                <div className="place-self-start col-span-2 ">
                    <div>social links</div>
                </div>
                <div className="place-self-start col-span-2 ">
                    <div>proxy info</div>
                </div>
            </div>
        </div>
    );
}
