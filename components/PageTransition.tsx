"use client"
import React, { ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{
            opacity: 1,
          }}
          animate={{
            opacity: 0,
            transition: {
              delay: pathname.includes("services") ? 1.1 : 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          exit={{
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          className='h-screen fixed w-screen top-0 pointer-events-none bg-primary'
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
