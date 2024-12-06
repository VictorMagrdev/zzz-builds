import TierListSlug from '@/components/screens/TierListSlug'
import type { Metadata, ResolvingMetadata } from 'next'

type tParams = Promise<{ slug: string }>;

type PageProps = {
  params: tParams;
  searchParams: { [key: string]: string | string[] | undefined };
}


export async function generateMetadata(
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;  
  return {
    title: `Tier list ${slug}`,
    description: "this is a tier list",
  };
}

export default async function Page(props: PageProps) {
  const { slug } = await props.params; 
  if (!slug) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Cargando...</p>
      </main>
    );
  }
  const tierlistId = parseInt(slug);
  return <TierListSlug tierlistId={tierlistId} />;
}
