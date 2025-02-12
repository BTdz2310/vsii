import React from 'react'
import Link from 'next/link'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { CircleUserRound, LogIn, Settings } from 'lucide-react'
import { ROUTES } from 'src/constants/routes'

function AvatarButton() { 

  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <CircleUserRound className="w-[24px] h-[24px] cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="w-[200px] right-0 absolute top-2 py-[12px] px-[6px] rounded-[12px]">
          <div className="flex gap-4 items-center pb-[12px] px-[6px]">
            <img className="h-[28px] w-[28px] rounded-full bg-red-200" />
            <p className="font-open-sans text-sm font-semibold">Anonymous</p>
          </div>
          <div className="py-[6px] flex flex-col gap-0">
            <div className="flex items-center gap-4 cursor-pointer hover:bg-accent py-[6px] px-[6px] rounded-lg">
              <CircleUserRound className="w-[16px] h-[16px] m-[2px]" />
              <p className="font-open-sans text-sm">Hồ sơ</p>
            </div>
            <Link href="" className="flex items-center gap-4 cursor-pointer hover:bg-accent py-[6px] px-[6px] rounded-lg">
              <Settings className="w-[16px] h-[16px] m-[2px]" />
              <p className="font-open-sans text-sm">Cài đặt</p>
            </Link>
          </div>
          <div className="pt-[6px] border-t">
            {/* <div className="flex items-center gap-4 cursor-pointer hover:bg-accent py-[6px] px-[6px] rounded-lg" onClick={signOut}>
              <i className="icon-ic-logout w-[16px] h-[16px] m-[2px]" />
              <p className="font-open-sans text-sm">Logout</p>
            </div> */}
            <Link href={ROUTES.LOGIN} className="flex items-center gap-4 cursor-pointer hover:bg-accent py-[6px] px-[6px] rounded-lg">
              <LogIn className="w-[16px] h-[16px] m-[2px]" />
              <p className="font-open-sans text-sm">Đăng nhập</p>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default AvatarButton
