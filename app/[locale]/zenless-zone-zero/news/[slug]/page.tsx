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
    title: `News ${params.slug}`,
    description: "this is a new",
  }
}

export default function News({ params }: { params: { slug: string } }) {
    return (<>My New: {params.slug}</>);
  }