"use client"
import { navLinks } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex gap-8'>
      {" "}
      {navLinks.map(({ name, path }, index) => (
        <Link
          key={path}
          href={path}
          className={`${
            path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium
           hover:text-accent transition-all `}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
