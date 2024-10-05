"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const ProfilePicture = () => {
  return (
    <div className='w-full h-full relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1.8,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute'
        >
          <Image
            src={"/assets/photo.png"}
            priority
            quality={100}
            fill
            alt='profile-pic'
            className='object-contain opacity-80 rounded-full '
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className='w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]'
          fill='transparent'
          viewBox='80 10 356 490'
          xmlns='http://www.w3.org'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#00ff99'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: "124 10 70 10" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 192 72",
                "4 150 42 32",
                "6 340 155 122",
                "4 250 22 222",
              ],
              rotate: [60, 120, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default ProfilePicture
