'use client'

import { useEffect, useState } from 'react';
import { Card } from '@/components/organisms/Card';
import { getAllCharacters } from '@/libs/api_general';

import { Character } from '@/types/api-general';

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getAllCharacters()
    .then((data: Character[]) => {
      setCharacters(data)
    })
    .catch((e) => {
      alert('Error al consultar la informacion del api')
    })
  }, [])

  return (
    <>
      <main className="w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 gap-5 justify-center sm:justify-start lg:justify-evenly px-4 sm:px-6 lg:px-8">
        {characters.map((prod, index) => (
          <Card 
            key={prod.id}
            character={prod}
          />
        ))}
      </main>

    </>
  );
}