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
    title: `Tier list ${params.slug}`,
    description: "this is a tier list",
  }
}
 

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Tier List: {params.slug}</div>
  }