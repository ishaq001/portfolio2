import { motion } from "framer-motion"
import React from "react"

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%"],
  },
}

const Stairs = ({ location }: { location: string }) => {
  let NavigatingTo: string | string[] = ""
  if (location === "/") {
    NavigatingTo = ["H", "O", "M", "E"]
  } else {
    NavigatingTo = location.split("/")[1].toUpperCase().split("")
  }

  return (
    <>
      {NavigatingTo.map((item, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: (index + 3) * 0.11,
          }}
          className='  h-full w-12  bg-primary relative'
        >
          <div
            className={`w-full h-full ${
              index % 2 !== 0 ? "text-white" : "text-accent"
            } text-3xl font-extrabold flex justify-center items-center text-pretty`}
          >
            {item}
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default Stairs
