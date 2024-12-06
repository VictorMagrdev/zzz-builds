import type { Metadata, ResolvingMetadata } from 'next'
import { getCharacterById } from '@/libs/api_general'
import CharacterView from '@/components/molecules/CharacterView'


type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const character = await getCharacterById(parseInt(slug))
  return {
    title: `Character ${character[0].nombre}`,
    description: `Zenless Zone Zero ${character[0].nombre}`,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const character = await getCharacterById(parseInt(slug))
  return (
    <CharacterView character={character} />
  )
}
