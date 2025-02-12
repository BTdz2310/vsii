'use client'
import dayjs from 'dayjs'
import "dayjs/locale/vi";
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';

dayjs.locale("vi");

const topics = ['Thời sự', 'Kinh tế', 'Thể thao', 'Giải trí', 'Pháp luật', 'Giáo dục', 'Công nghệ', 'Xe', 'Đời sống', 'Môi trường', 'Quân sự', 'Từ Cộng Đồng']

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 64;
    setIsScrolled(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    // bg-white dark:bg-dark
    <div className='flex items-center gap-16 justify-between py-5 px-12 sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <h1 className={twMerge('uppercase font-sarpanch font-bold text-2xl cursor-pointer duration-100 transition-all', isScrolled ? '' : 'invisible')}>VSII</h1>
      <div className='flex gap-16 duration-300 transition-all w-full items-stretch' style={{ transform: isScrolled ? '' : 'translateX(calc(-50px - 4rem))' }}>
        <div className='shrink-0'>
          <p className='capitalize text-center font-bold text-sm'>{dayjs().format('dddd')}</p>
          <p className='text-sm'>{dayjs().format('DD MMM YYYY')}</p>
        </div>
        <div className={twMerge('flex gap-16 overflow-auto overflow-invisible items-center')}>
          {topics.map((topic, index) => (
            <Link href="/" key={index} className='text-dark leading-none text-xs font-quicksand font-semibold tracking-wider dark:text-light-grey hover:underline shrink-0'>{topic}</Link>
          ))}
        </div>
      </div>
      {/* <div className='absolute top-1/2 -translate-y-1/2 right-16'>
        <ArrowRight className={twMerge('animate-[bounce_2s_infinite] w-6 h-6 text-gray-600', isScrolled ? 'invisible' : '')} />
      </div> */}
    </div>
  )
}

export default NavBar