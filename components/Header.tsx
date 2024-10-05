import Link from "next/link"
import React from "react"
import Navbar from "./Navbar"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* LOGO */}

        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Muhammad<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden lg:flex items-center gap-8'>
          <Navbar />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile Nav */}
        <div className='lg:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
