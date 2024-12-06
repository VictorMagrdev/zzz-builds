import Image from "next/image";
import { tierlist } from "@/types/api-general";
import Link from "next/link";

type CardProps = {
  tierlist: tierlist; 
};

export function TierListGeneralCard({ tierlist }: CardProps) {
    const image = `https://zzzbuilds-server.lat/imagenes/tierlist/${tierlist.imagen}`;

  return (
    <article className="relative flex flex-col h-max rounded-sm border-slate-400 p-4 overflow-hidden">
        <Link href={`/zenless-zone-zero/tier-list/${tierlist.id}`} className="relative block">
        <div className="w-[400px] h-[190px] relative">
          <Image
            className="rounded-md transition-transform duration-300 transform hover:scale-105 object-cover"
            src={image}
            alt={tierlist.nombre}
            fill
            priority
            sizes="auto"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <p className="text-white font-semibold text-xl">{tierlist.nombre}</p>
        </div></Link>
    </article>
  );
}
