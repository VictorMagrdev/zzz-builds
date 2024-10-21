import type { Metadata } from "next";
import { bg_blue_60,bg_blue_30,bg_blue_10 } from '@/components/tokens'
import { ProxyInfo } from "@/components";
import Ben from "@/assets/images/Ben.png"
import ProfileView from "@/components/screens/ProfileView";
import { getUserProfile } from "@/libs/api_general";
;


export const metadata: Metadata= {
  title: 'Profile',
  description: 'Profile info',
}


export default async function Page() {
  const profile  = await getUserProfile()
  return (
      <ProfileView profile={profile}/>
  );
}
