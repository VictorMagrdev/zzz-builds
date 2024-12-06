import { Metadata, ResolvingMetadata } from 'next'
import { getCharacterById } from '@/libs/api_general'
import CharacterView from '@/components/molecules/CharacterView'

type Params = {
  slug: string
}

type PageProps = {
  params: Params
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const character = await getCharacterById(parseInt(slug));
  return {
    title: `Character ${character[0].nombre}`,
    description: `Zenless Zone Zero ${character[0].nombre}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const character = await getCharacterById(parseInt(slug));
  return <CharacterView character={character} />;
}
