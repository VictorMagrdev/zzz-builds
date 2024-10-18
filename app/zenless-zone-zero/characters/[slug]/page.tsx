import type { Metadata, ResolvingMetadata } from 'next'
import { getCharacterById } from '@/libs/api_general'
import CharacterView from '../../../../components/molecules/CharacterView'
import { bg_blue_30, bg_blue_60 } from '@/components/tokens'
import useStore from '@/store/useStore'


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
    title: `Character ${character[0].nombre}`,
    description: `Zenless Zone Zero ${character[0].nombre}`,
  }
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page({ params }: { params: { slug: string } }) {
  const character = await getCharacterById(parseInt(params.slug))
  return (
    <CharacterView character={character} />
  )
}
