import Image from "next/image";
import { Character } from "@/types/api-general";

type CardProps = {
  character: Character; 
};

export function TierListCard({ character }: CardProps) {
    const image = `http://localhost:306/imagenes/personajes/${character.imagen}`;
  return (
    <article className="relative flex flex-col h-max rounded-sm border-slate-400 p-4 w-[150px] overflow-hidden">
        <Image
          className="rounded-md transition-transform duration-300 transform hover:scale-105"

          src={image}
          alt={character.nombre}
          width={150}
          height={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <p className="text-white font-semibold text-xl">{character.nombre}</p>
        </div>
    </article>
  );
}