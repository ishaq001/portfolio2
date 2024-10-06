"use client"
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiRedux,
} from "react-icons/si"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaGithub,
} from "react-icons/fa"

// About Me Data
const aboutMe = {
  title: "About Me",
  description:
    "lorem ipsum sit amet consectuar adispipsing elit. Voluptates quibsrams lorem ipsum sit amet consectuar adispipsing elit. Voluptates quibsrams",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Ishaq",
    },
    {
      fieldName: "Phone",
      fieldValue: "+9233099795",
    },
    {
      fieldName: "Experience",
      fieldValue: "5 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "ishaq404error@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu, Hindi, Pushto",
    },
  ],
}
// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "lorem ipsum sit amet consectuar adispipsing elit. Voluptates quibsrams lorem ipsum sit amet consectuar adispipsing elit. Voluptates quibsrams",
  companies: [
    {
      company: "AT TECH",
      position: "Software Engineer",
      duration: "May 2022 - April 2024",
    },
    {
      company: "Iplex Pvt Ltd",
      position: "React JS Developer",
      duration: "Sep 2020 - May 2022",
    },
    {
      company: "Open Testing Services",
      position: "Software Engineer",
      duration: "Jan 2022 - Sep 2024",
    },
  ],
}
// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "lorem ipsum sit amet consectuar adispipsing elit. Voluptates quibsrams lorem ipsum sit amet consectuar adispipsing elit. Voluptates quibsrams",
  degrees: [
    {
      insitute: "The University of Agriculture Peshawar, Pakistan",
      degree: "Information Technology",
      duration: "2016 - 2019",
    },
    {
      insitute: "Edwardes College, Peshawar",
      degree: "Pre Engineering",
      duration: "2013 - 2015",
    },
  ],
}
// Skills Data
const skills = {
  title: "My Skills",
  description: "",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaNodeJs />,
      name: "Node JS",
    },
    {
      icon: <SiExpress />,
      name: "Express JS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
  ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

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
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
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
          <div className='min-h-[70vh] w-full'>
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
              Education
            </TabsContent>

            {/* Skills */}
            <TabsContent
              value='skills'
              className='w-full'
            >
              Skills
            </TabsContent>

            {/* About me */}
            <TabsContent
              value='about'
              className='w-full'
            >
              About me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
