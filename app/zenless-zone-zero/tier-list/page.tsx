import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata= {
  title: 'Tier List',
  description: 'Tier List description',
}


export default function TierList() {
    return (
      <div className="flex flex-col" >
      <div className="p-8 place-self-center">
        <input type="text" placeholder="search tier list" name="" id="" />
      </div>
      
      <div className='flex items-stretch'>
      <div className='p-8'>
      </div>
      <div className="place-self-center">
        <Link href="/zenless-zone-zero/tier-list/post" className="h-16 w-16 flex items-center justify-center rounded-full bg-gray-200 text-2xl text-gray-700">+</Link>
      </div>
      </div>
      </div>
    );
  }
  