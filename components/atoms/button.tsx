'use client'

import Link from 'next/link'
import { PencilIcon } from '@primer/octicons-react'
import useStore from '@/store/useStore';

interface creationLink{
  ruta: string
}

export default function ButtonCreation({ruta}:creationLink ) {

  const token = useStore((store) => store.token);
    return (
    <>{token == null ? 
        (
          <Link
          href={`${ruta}`}
          className="place-self-end w-10 h-10 flex items-center justify-center border border-cyan-500 bg-cyan-500 rounded-full "
        >
          <PencilIcon size={24} />
        </Link>

        ):(
          <>
        </>)}
    </>
  )
}
