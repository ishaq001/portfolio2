"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import { aboutMe, education, experience, skills } from "@/data"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className='min-h-[85vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>

            <TabsTrigger value='education'>Education</TabsTrigger>

            <TabsTrigger value='skills'>Skills</TabsTrigger>

            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[80vh] w-full'>
            {/* Experience */}
            <TabsContent
              value='experience'
              className='w-full'
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[35px]'>
                    {experience.companies.map(
                      ({ company, duration, position }, index) => {
                        return (
                          <li
                            key={index}
                            className='bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                          >
                            <span className='text-accent'>{duration}</span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                              {position}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-ful bg-accent'></span>
                              <p className='text-white/60'>{company}</p>
                            </div>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent
              value='education'
              className='w-full'
            >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[35px]'>
                    {education.degrees.map(
                      ({ insitute, duration, degree }, index) => {
                        return (
                          <li
                            key={index}
                            className='bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                          >
                            <span className='text-accent'>{duration}</span>
                            <h3 className='text-xl max-w-[280px] min-h-[60px] text-center lg:text-left'>
                              {degree}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-ful bg-accent'></span>
                              <p className='text-white/60'>{insitute}</p>
                            </div>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent
              value='skills'
              className='w-full '
            >
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
                  {skills.skillsList.map(({ icon, name }, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-[45px] group-hover:text-accent transition-all duration-300'>
                                {icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{aboutMe.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {aboutMe.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-0'>
                  {aboutMe.info.map(({ fieldName, fieldValue }, index) => {
                    return (
                      <li
                        className='flex items-center justify-center xl:justify-start'
                        key={index}
                      >
                        <div className='flex items-center gap-3'>
                          {/* green dot */}
                          <span className='w-[6px] h-[6px] rounded-ful bg-accent'></span>

                          <span className='text-white/60'>{fieldName}:</span>
                          <span className='text-[18px]'>{fieldValue}</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
