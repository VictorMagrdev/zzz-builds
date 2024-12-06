import TierListSlug from '@/components/screens/TierListSlug';
import type { Metadata, ResolvingMetadata } from 'next';

type tParams = Promise<{ slug: string[] }>;

type PageProps = {
  params: tParams;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await props.params;
  return {
    title: `Tier list ${slug[0]}`,
    description: "this is a tier list",
  };
}

export default async function Page(props: PageProps) {
  const { slug } = await props.params;
  if (!slug || slug.length === 0) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Cargando...</p>
      </main>
    );
  }

  const tierlistId = parseInt(slug[0]);

  const searchParamsResolved = await props.searchParams;

  return <TierListSlug tierlistId={tierlistId} />;
}
