'use client'
import { AlignRight, Moon, Search, Sun } from 'lucide-react'
// import { Link } from 'next-view-transitions'
import React from 'react'
import { useTheme } from 'next-themes'
import AvatarButton from './AvatarButton'
import Link from 'next/link'
import { ROUTES } from 'src/constants/routes'

const Header = () => {
  const { setTheme } = useTheme()
  return (
    <header className='w-screen h-16 px-12 absolute inset-0 bg-[#f9f4ed] dark:bg-[#2C3E50]'>
      <div className='flex items-center justify-between w-full h-full border-dashed border-dark-grey'>
        <div className='h-full flex items-center gap-20'>
          <h1 className='uppercase font-sarpanch font-bold text-2xl cursor-pointer'>VSII</h1>
          {/* <div className='flex items-center gap-12 text-sm'>
            <Link href='/' className='font-space-grotesk hover:underline'>Home</Link>
            <Link href='/' className='font-space-grotesk hover:underline'>Lastest News</Link>
            <Link href='/' className='font-space-grotesk hover:underline'>Reviews</Link>
          </div> */}
        </div>
        <div className='flex items-center justify-end gap-4 relative z-20'>
          <Link href={ROUTES.SEARCH}>
            <Search />
          </Link>
          <AvatarButton />
          {/* <AlignRight /> */}
          {/* <div className='cursor-pointer w-[24px] h-[24px] relative'>
            <Moon onClick={() => setTheme('dark')} className="z-50 w-[24px] absolute top-1/2 -translate-y-1/2 right-0 h-[24px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Sun onClick={() => setTheme('light')} className="z-50 w-[24px] absolute top-1/2 -translate-y-1/2 right-0 h-[24px] scale-0 rotate-90 transition-all dark:rotate-0 dark:scale-100" />
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header