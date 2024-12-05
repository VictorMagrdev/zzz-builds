import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types/api-general";

type CardProps = {
  character: Character; 
};

export function CardFrontPage({ character }: CardProps) {
  return (
    <Image
                  src={`https://zzzbuilds-server.lat/imagenes/personajes/${character.imagen}`}
                  alt={`Opción ${character.nombre}`}
                  layout="responsive"
                    width={800} 
                    height={300} 
                  objectFit="cover"
              />
  );
}