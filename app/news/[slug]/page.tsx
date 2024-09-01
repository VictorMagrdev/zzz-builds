import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  return {
    title: params.id,
    description: "this is a new",
  }
}

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My New: {params.slug}</div>
  }