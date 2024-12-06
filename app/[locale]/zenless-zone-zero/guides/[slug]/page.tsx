import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  return {
    title: `Guide ${params.slug}`,
    description: 'esto es una guia',
  }
}

export default function Guides({ params }: { params: { slug: string } }) {
  return <>{`This is the Guide for ${params.slug}`}</>;
}
