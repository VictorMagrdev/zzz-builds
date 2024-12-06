import { GetStaticProps, GetStaticPaths } from 'next'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `Guide ${params.slug}`,
    description: "this is a guide",
  }
}

// Definir cómo obtener los parámetros estáticos
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'example' } }],
    fallback: 'blocking',
  }
}

// Obtener los parámetros estáticos
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      params: { slug: params?.slug || 'default' }
    }
  }
}

export default function Guides({ params }: { params: { slug: string } }) {
  return <>{`This is the Guide for ${params.slug}`}</>;
}
