import type { Metadata } from "next";
import ProfileView from "@/components/screens/ProfileView";
;


export const metadata: Metadata= {
  title: 'Profile',
  description: 'Profile info',
}


export default async function Page() {
  return (
      <ProfileView />
  );
}
