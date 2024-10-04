"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs"

const StairTransition = () => {
  const pathname = usePathname()

  return (
    <AnimatePresence>
      <div key={pathname}>
        <div className='h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-40 flex justify-center items-center'>
          <Stairs location={pathname} />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default StairTransition
