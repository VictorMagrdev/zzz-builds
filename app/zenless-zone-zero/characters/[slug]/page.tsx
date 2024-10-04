'use client'
import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'

import { getCharacterById } from '@/libs/api_general'
import { bg_blue_30, bg_blue_60 } from '@/components/tokens'


type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const character = await getCharacterById(parseInt(params.slug))  
  console.log(character);
  

  return {
    title: `character ${character[0].nombre}`,
    description: `Zenless Zone Zero ${character[0].nombre}`,
  }
}
 

export default async function Page({ params }: { params: { slug: string } }) {
  const character = await getCharacterById(parseInt(params.slug))  
  return (
      <>
      <main className={`flex flex-col max-w-5xl mx-auto h-screen p-4 mt-4 ${bg_blue_30}`}>
        <div className={`${bg_blue_60} p-4 rounded-lg shadow-lg flex items-center justify-start`}>
          <div className="flex flex-col items-start ml-0">
            <p className="text-xl font-semibold text-white mb-3">
              {character[0].nombre}
            </p>
            <Image
              alt={character[0].nombre}
              src={`http://localhost:301/imagenes/${character[0].imagen}`}
              width={350}
              height={350}
              className="border-solid border-2 rounded-md bg-blue-900"
            />

          </div>
          <div className="ml-8 p-6 rounded-lg w-2/3 space-y-10">
            <p className="text-xl font-semibold text-white mb-3">
            Stats
            </p>
            <div className="flex items-center mb-2">
              <span className="bg-gray-600 px-3 py-1 rounded-full text-white mr-2">
                {character[0].clase}
              </span>
              <span className="bg-gray-600 px-3 py-1 rounded-full text-white">
                {character[0].afiliacion}
              </span>
            </div>
            <div className="mt-4 space-y-4 text-gray-900 font-bold">
              <div className="flex justify-between items-center h-8 rounded-md pl-2 pr-2 bg-blue-500">
                <span>HP</span>
                <span>{character[0].hp}</span>
              </div>
              <div className="flex justify-between items-center h-8 rounded-md pl-2 pr-2 bg-blue-300">
                <span>DEF</span>
                <span>{character[0].def}</span>
              </div>
              <div className="flex justify-between items-center h-8 rounded-md pl-2 pr-2 bg-blue-500">
                <span>ATK</span>
                <span>{character[0].atk}</span>
              </div>
              <div className="flex justify-between items-center h-8 rounded-md pl-2 pr-2 bg-blue-300">
                <span>Impact</span>
                <span>{character[0].impact}</span>
              </div>
              <div className="flex justify-between items-center h-8 rounded-md pl-2 pr-2 bg-blue-500">
                <span>Anomaly Mastery</span>
                <span>{character[0].anomaly_mastery}</span>
              </div>
              <div className="flex justify-between items-center h-8 rounded-md pl-2 pr-2 bg-blue-300">
                <span>Anomaly Proficiency</span>
                <span>{character[0].anomaly_proficiency}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    )
  }