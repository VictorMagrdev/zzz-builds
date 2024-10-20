import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types/api-general";

type CardProps = {
  character: Character; 
};

export function Card({ character }: CardProps) {
  return (
    <article className="relative flex flex-col h-max rounded-sm border-slate-400 p-4 w-[350px] overflow-hidden">
      <Link href={`/zenless-zone-zero/characters/${character.id}`} className="relative block">
        <Image
          className="rounded-md transition-transform duration-300 transform hover:scale-105"

          src={`http://localhost:302/imagenes/${character.imagen}`}
          alt={character.nombre}
          width={250}
          height={200}
          layout="responsive"

        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <p className="text-white font-semibold text-xl">{character.nombre}</p>
        </div>
      </Link>
    </article>
  );
}
