import type { Metadata } from "next";

import TierList from "@/components/screens/TierList";


export const metadata: Metadata= {
  title: 'Tier List',
  description: 'Tier List description',
}

export default function page() {
    
    return (
      <>
      <TierList/>
      </>
    );
  }
  