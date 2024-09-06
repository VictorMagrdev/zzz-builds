import React from 'react'
import Image from 'next/image'
import zzzLogo from "../../assets/images/zzz-logo.png"

export default function Header() {
  return (
    <header className='header'>
        <nav className='nav'>
            <div className='logo'>
                <Image src={zzzLogo} alt="Logo Zenless" />
            </div>
        </nav>
    </header>
  )
}
