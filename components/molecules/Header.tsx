'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import zzzLogo from "../../assets/images/zzz-logo.png"
import {bg_blue_30 , bg_blue_10 } from '../tokens'
import bangboo from '@/assets/images/profile.webp'
import useStore from '@/store/useStore'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };
  const token = useStore((store) => store.token);
  const logout = useStore((store) => store.logout);
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
          <Link href="/zenless-zone-zero/guides" className='text-white hover:text-gray-400 transition-colors'>Guides</Link>
          <Link href="/zenless-zone-zero/tier-list" className='text-white hover:text-gray-400 transition-colors'>Tier List</Link>
          <Link href="#" className='text-white hover:text-gray-400 transition-colors'>News</Link>
          <Link href="/zenless-zone-zero/characters" className='text-white hover:text-gray-400 transition-colors'>Characters</Link>
        </ul>
        {token !== null ? (
          <>
          <Link href="/profile" passHref>
            <Image
              src={bangboo}
              width={115}
              height={115} 
              alt="Logo Zenless"
              className='h-auto -ml-16 border-4 rounded-full' 
            />
          </Link>
          <button 
          className={`${bg_blue_10} h-10 px-6 font-semibold rounded-md text-white`}
          onClick={()=> logout()}>log out</button>
          </>
        ) : (
          <>
      <button 
        className="bg-blue-500 h-10 px-6 font-semibold rounded-md text-white" 
        onClick={handleLogin}>
        Login
      </button>
      <button 
        className="bg-blue-500 h-10 px-6 font-semibold rounded-md text-white" 
        onClick={handleRegister}>
        Register
      </button>
    </>
        )}
      </nav>
    </header>
  )
}
