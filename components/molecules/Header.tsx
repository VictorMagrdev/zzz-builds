import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import zzzLogo from "../../assets/images/zzz-logo.png"
import { bg_blue_30 } from '../tokens'

export default function Header() {
  return (
    <header className={`${bg_blue_30} p-4`}>
        <nav className='flex justify-center items-center space-x-36 max-w-screen-xl mx-auto h-8'>
            <Link href="/" passHref>
              <Image
                src={zzzLogo}
                width={200}
                height={200} 
                alt="Logo Zenless"
                className='h-auto -ml-16' 
              />
            </Link>
            <ul className='flex space-x-20 text-xl'>
                <Link href="zenless-zone-zero/guides" className='text-white hover:text-gray-400 transition-colors'>Guides</Link>
                <Link href="#" className='text-white hover:text-gray-400 transition-colors'>Tier List</Link>
                <Link href="#" className='text-white hover:text-gray-400 transition-colors'>News</Link>
            </ul>
        </nav>
    </header>
  )
}
