'use client';

import Image from 'next/image';
import { bg_blue_30, bg_blue_60 } from '@/components/tokens';
import { tierlist } from '@/types/api-general';
import { getTierlistById } from '@/libs/api_general';
import { useState, useEffect } from 'react';

type TierListSlugProps = {
  tierlistId: number;
};

export default function TierListSlug({ tierlistId }: TierListSlugProps) {
  const [tierlistdata, setTierlist] = useState<tierlist | null>(null);
  useEffect(() => {

    getTierlistById(tierlistId)
      .then((data: tierlist) => {
        if (Array.isArray(data) && data.length > 0) {
            setTierlist(data[0]);
          } else {
            setTierlist(data as tierlist);
          }
      })
      .catch((e) => {
        alert('Error al consultar la información del API');
        console.error(e);
      });
  }, [tierlistId]);

  if (!tierlistdata) {
    return (
      <main className={`flex flex-col max-w-5xl mx-auto h-screen p-4 mt-4 ${bg_blue_30}`}>
        <p className="text-white text-xl">Cargando tierlist...</p>
      </main>
    );
  }
  const {imagen,nombre} = tierlistdata
  const image = `http://localhost:3030/imagenes/tierlist/${imagen}`;


  return (
    <main
  className={`flex flex-col max-w-5xl w-full mx-auto min-h-screen p-4 mt-4 ${bg_blue_30}`}>
  <div
    className={`${bg_blue_60} p-4 rounded-lg shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between`}>
    <div className="flex flex-col items-start w-full">
      <p className="text-lg sm:text-xl font-semibold text-white place-self-center mb-3">
        {nombre}
      </p>
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={nombre || "Tierlist Image"}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
          className="object-contain"
        />
      </div>
    </div>
  </div>
</main>
  );
}
