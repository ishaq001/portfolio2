"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const links: { name: string; path: string }[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='flex gap-8'>
      {" "}
      {links.map(({ name, path }, index) => (
        <Link
          key={path}
          href={path}
          className={`${
            path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium
           hover:text-accent `}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
