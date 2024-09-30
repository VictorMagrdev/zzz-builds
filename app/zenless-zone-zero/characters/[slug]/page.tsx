import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { getCharacterById } from '@/libs/api_general'
import { bg_blue_30 } from '@/components/tokens'


type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const character = await getCharacterById(parseInt(params.slug))  

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
            <div className="flex items-center">
              <Image
                alt={character[0].nombre}
                src={`http://localhost:300/imagenes/${character[0].imagen}`}
                width={250}
                height={250}
                className='rounded-full'
              />
              <p className="text-xl font-semibold text-white ml-4">{character[0].nombre}</p>
            </div>
          </main>
        </>

    )
  }