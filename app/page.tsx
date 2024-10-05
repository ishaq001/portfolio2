import ProfilePicture from "@/components/ProfilePicture"
import SocialAccounts from "@/components/SocialAccounts"
import { Button } from "@/components/ui/button"
import Stats from "@/components/ui/Stats"

import { FiDownload } from "react-icons/fi"
const Home = () => {
  return (
    <section>
      <div className='container mx-auto '>
        <div className='flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24'>
          {/* Intro */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl '>Software Engineer</span>
            <h1 className='h1 mt-2 mb-5'>
              Hello I'm <br />
              <span className='text-accent'>Muhammad Ishaq</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              Skilled Software Engineer with over four years of experience,
              specializing in JavaScript, TypeScript, React, Next.js, and the
              MERN stack. I am dedicated to crafting innovative solutions that
              elevate user experiences with elegance and precision.
            </p>
            {/* Download Button & Social Icons */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span className='text-xl'>Download CV</span>
                <FiDownload />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <SocialAccounts
                  containerStyles='flex gap-6'
                  iconsStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          {/* Picture */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <ProfilePicture />
          </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />
    </section>
  )
}

export default Home
