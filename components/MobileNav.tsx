"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* LOGO */}
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              Muhammad <span className='text-accent'>Ishaq</span>
            </h1>
          </Link>
        </div>

        {/* Nav */}
        <div className='flex flex-col justify-center items-center gap-8'>
          {navLinks.map(({ name, path }, index) => {
            return (
              <Link
                href={path}
                key={index}
                className={`${
                  path === pathname && "text-accent border-b-2 border-accent"
                } capitalize
                   hover:text-accent-hover text-xl transition-all`}
              >
                {name}
              </Link>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
