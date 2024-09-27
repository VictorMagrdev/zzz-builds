import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import ben from "@/assets/images/Ben.png"

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
 
  return {
    title: `characters list ${params.slug}`,
    description: "this is a tier list",
  }
}
 

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <>
            <Image
                alt='asdf'
                src={ben}
                className='rounded-full'
            />
              
            <p>{params.slug}</p>
        </>

    )
  }