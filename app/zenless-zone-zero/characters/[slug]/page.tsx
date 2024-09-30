'use client'
import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import ben from "@/assets/images/Ben.png"
import { Character } from '@/types/api-general'
import { useState, useEffect } from 'react'
import { getCharacter } from '@/libs/api_general'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 

export default function Page({ params }: { params: { slug: string } }) {
  const [characters, setCharacters] = useState<Character>()

  useEffect(() => {
     getCharacter(Number(params.slug))
     .then((data: Character) => {
        console.log(data)
       setCharacters(data)
     })
     .catch((e) => {
       alert('Error al consultar la informacion del api')
     })
  })
    return (
        <div>
            <Image
                alt='asdf'
                src={ben}
                className='rounded-full'
            />
              
            <p>{params.slug}</p>
        </div>

    )
  }