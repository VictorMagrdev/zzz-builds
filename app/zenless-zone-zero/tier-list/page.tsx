import type { Metadata } from "next";
import Header from "@/components/layout/Header";

export const metadata: Metadata= {
  title: 'Tier List',
  description: 'Tier List description',
}


export default function TierList() {
    return (
      <div className="flex flex-col" >
        <Header/>
      <div className="p-8 place-self-center">
        <input type="text" placeholder="seach tier list" name="" id="" />
      </div>
      
      <div className='flex items-stretch'>
      <div className='p-8'>
      </div>
      <div className="place-self-center">
      <button className="h-[100px] w-[100px] rounded-full bg-gray-200">+</button>

      </div>
      </div>
      </div>
    );
  }
  