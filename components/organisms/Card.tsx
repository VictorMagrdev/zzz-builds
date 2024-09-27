import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types/api-general";

type CardProps = {
  character: Character; 
};

export function Card({ character }: CardProps) {
  return (
    <article className="flex flex-col h-max rounded-sm border-slate-400 p-4 w-[350px]">
      <Link href={`/${character.id}`}>
        <Image
          className="rounded-md"
          src={character.imagen} 
          alt={character.nombre}
          width={250}
          height={200}
        />
      </Link>
      <p className="font-semibold text-xl text-gray-950">{character.nombre}</p>
    </article>
  );
}
