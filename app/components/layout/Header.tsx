import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import zzzLogo from "../../assets/images/zzz-logo.png"

export default function Header() {
  return (
    <header className='bg-blue-950 p-4'>
        <nav className='flex justify-center items-center space-x-36 max-w-screen-xl mx-auto h-16'>
            <Link href="#" passHref>
              <Image
                src={zzzLogo}
                width={250}
                height={250} 
                alt="Logo Zenless"
                className='h-auto -ml-16' 
              />
            </Link>
            <ul className='flex space-x-20 text-2xl'>
                <li><a href="#" className='text-white hover:text-gray-400'>Guides</a></li>
                <li><a href="#" className='text-white hover:text-gray-400'>Tier List</a></li>
                <li><a href="#" className='text-white hover:text-gray-400'>News</a></li>
            </ul>
        </nav>
    </header>
  )
}
