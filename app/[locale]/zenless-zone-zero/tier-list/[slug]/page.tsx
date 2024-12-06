import TierListSlug from '@/components/screens/TierListSlug';
import type { Metadata, ResolvingMetadata } from 'next';

type PageProps = {
  params: { slug: string };
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Tier list ${slug}`,
    description: "this is a tier list",
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  if (!slug) {
    return (
      <main className="flex items-center justify-center h-screen">
        <p>Cargando...</p>
      </main>
    );
  }

  const tierlistId = parseInt(slug);

  const searchParamsResolved = await searchParams;

  return <TierListSlug tierlistId={tierlistId} />;
}
