'use client'

import { bg_blue_60,bg_blue_10 } from '@/components/tokens'

import ButtonCreation from "@/components/atoms/button";
import { getAllTierlist } from "@/libs/api_general";
import { tierlist } from "@/types/api-general";
import { useState, useEffect } from "react";
import { TierListGeneralCard } from "@/components/organisms/tier-list-general-card";


export default function TierList() {
  const [tierlist, setTierlist] = useState<tierlist[]>([])

  useEffect(() => {
    getAllTierlist()
    .then((data: tierlist[]) => {
      setTierlist(data)
    })
    .catch((e) => {
      alert('Error al consultar la informacion del api')
    })
  }, [])
    return (
      <div className={`flex flex-col min-h-screen ${bg_blue_60}`} >
      <div className="p-8 place-self-center flex justify-center">

        <form action="" method="post">
        <input className={` placeholder:text-slate-900 block ${bg_blue_10} border py-2 pl-9 pr-3 rounded-lg size-8 my-8 w-96 mb-2 focus:outline-none sm:text-sm" placeholder="Seach" type="seach" name="seach"`}/>
        </form>
      </div>
      <div className='flex items-stretch'>
      {tierlist.map((prod, index) => (
          <TierListGeneralCard 
            key={prod.id}
            tierlist={prod}
          />
        ))}
      
      </div>
      <div className="place-self-end">
        <ButtonCreation ruta="/zenless-zone-zero/tier-list/post"/>
      </div>
      </div>
    );
  }
  