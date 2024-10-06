"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"

const services = [
  {
    num: "01",
    title: "Custom Web Apps",
    description:
      "Specialized in developing custom web applications that are tailored to your specific needs, whether for e-commerce, project management, or any other purpose.",
    href: "",
  },
  {
    num: "02",
    title: "Responsive Web Design",
    description:
      " In today’s mobile-first world, having a responsive web design is essential for reaching your audience across all devices.",
    href: "",
  },
  {
    num: "03",
    title: "Single Page Apps",
    description:
      "Enhance user experience with fast and dynamic single-page applications (SPAs) that provide seamless navigation and interaction without page reloads. ",
    href: "",
  },
  {
    num: "04",
    title: "MERN Stack",
    description:
      "Harness the power of the MERN stack—MongoDB, Express.js, React, and Node.js—to create robust, dynamic web applications that cater to your business needs.",
    href: "",
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex-col flex justify-center pt-12 xl:pt-12'>
      <div className='container mx-auto'>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[50px]'
        >
          {services.map(({ description, href, num, title }, index) => {
            return (
              <div
                className='flex flex-col flex-1 justify-center group gap-4 text-ellipsis'
                key={index}
              >
                {/* top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {num}
                  </div>
                  <Link
                    href={href}
                    className='h-[50px] w-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45'
                  >
                    <BsArrowDownRight className='text-2xl text-primary' />
                  </Link>
                </div>

                {/* title */}
                <h2 className='text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {title}
                </h2>

                {/* description */}
                <p className='text-white/60 line-clamp-3'>{description}</p>

                <div className='border-b border-white/20 w-full'></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
