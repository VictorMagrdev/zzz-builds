import { Metadata, ResolvingMetadata } from "next";
import { getCharacterById } from "@/libs/api_general";
import CharacterView from "@/components/molecules/CharacterView";

type tParams = Promise<{ slug: string }>;

type PageProps = {
  params: tParams;
};

export async function generateMetadata(
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;
  const character = await getCharacterById(parseInt(slug));
  return {
    title: `Character ${character[0].nombre}`,
    description: `Zenless Zone Zero ${character[0].nombre}`,
  };
}

export default async function Page(props: PageProps) {
  const { slug } = await props.params;
  const character = await getCharacterById(parseInt(slug));
  return <CharacterView character={character} />;
}
