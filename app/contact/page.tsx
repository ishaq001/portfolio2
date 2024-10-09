"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+923360969795",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ishaq404error@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pakistan",
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className='py-6 '
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none '>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's Work Together</h3>
              <p className='text-white/60'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, quae. Quaerat sequi.
              </p>

              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {" "}
                <Input
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                />
                <Input
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                />
                <Input
                  type='email'
                  name='email'
                  placeholder='Email'
                />
                <Input
                  type='number'
                  name='phone'
                  placeholder='Phone No'
                />
              </div>

              {/* select*/}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='est'>Web Development</SelectItem>
                    <SelectItem value='cst'>Full Stack</SelectItem>
                    <SelectItem value='mst'>Debugging</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* TextArea */}
              <Textarea
                className='h-[200px]'
                placeholder='What service would you like to have ?'
              />

              {/* button */}
              <Button
                size='md'
                className='max-w-40'
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map(({ title, icon, description }, index) => (
                <li
                  key={index}
                  className='flex items-center gap-6'
                >
                  <div className='w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent items-center justify-center flex rounded-md'>
                    <div className='text-[28px]'>{icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{title}</p>
                    <h3 className='text-xl'>{description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
