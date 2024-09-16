import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import { bg_blue_60,bg_blue_30,bg_blue_10 } from '@/components/tokens'

import Link from "next/link";


export const metadata: Metadata= {
  title: 'Tier List',
  description: 'Tier List description',
}


export default function TierList() {
    return (
      <div className={`flex flex-col min-h-screen ${bg_blue_60}`} >
        <Header/>
      <div className="p-8 place-self-center flex justify-center">
        <form action="" method="post">
        <input className={` placeholder:text-slate-900 block ${bg_blue_10} border py-2 pl-9 pr-3 rounded-lg size-8 my-8 w-96 mb-2 focus:outline-none sm:text-sm" placeholder="Seach" type="seach" name="seach"`}/>
        </form>
      </div>
      
      <div className='flex items-stretch'>
      <div className='p-8'>
      <div className="grid grid-cols-4 gap-4 space-x-4 space-y-4">
      <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bg_blue_30}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#travel</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#winter</span>
          </div>
        </div>
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bg_blue_30}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#travel</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#winter</span>
          </div>
        </div>
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bg_blue_30}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#travel</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#winter</span>
          </div>
        </div>
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bg_blue_30}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#travel</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#winter</span>
          </div>
        </div>
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bg_blue_30}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#travel</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#winter</span>
          </div>
        </div>
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bg_blue_30}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#travel</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#winter</span>
          </div>
        </div>
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bg_blue_30}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#travel</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#winter</span>
          </div>
        </div>
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${bg_blue_30}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#photography</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#travel</span>
            <span className={`inline-block ${bg_blue_10} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>#winter</span>
          </div>
        </div>
        </div>
      </div>
      <div className="place-self-end">
      <Link href="/zenless-zone-zero/tier-list/post" className={`h-[50px] w-[50px] rounded-full ${bg_blue_10} p-8 m-8 content-center items-center flex justify-center`}>+</Link>
      </div>
      </div>
      </div>
    );
  }
  