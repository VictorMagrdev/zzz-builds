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
    title:`Guide ${params.slug}`,
    description: "this is a guide",
  }
}

export default function Guides({ params }: { params: { slug: string } }) {
    return (<>this is the Guides</>);

  }