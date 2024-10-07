"use client"
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiPostgresql,
  SiMysql,
} from "react-icons/si"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
  FaGithub,
  FaPython,
} from "react-icons/fa"

// About Me Data
const aboutMe = {
  title: "About Me",
  description:
    "Skilled Software Engineer with 4+ years of experience in developing robust, efficient software. Proficient in API integration, creating reusable components, and ensuring high code quality. Expertise in analyzing requirements and architecting solutions to deliver user-centric applications that drive business success.",
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
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "ishaq404error@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu, Hindi ",
    },
  ],
}
// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I've developed innovative software applications by collaborating with teams to analyze requirements and architect solutions. I focus on API integration, creating reusable components, and maintaining high code quality to deliver robust and efficient solutions.",
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
    "Completed FSC in Pre-Engineering, followed by a Bachelor's degree in Information Technology, providing a strong foundation in science, mathematics, and specialized technical skills in the IT & Software Engineering field.",
  degrees: [
    {
      insitute: "AUP, Pakistan",
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
  description:
    "My expertise lies in harnessing the power of Javscript, React.js, Next JS, TypeScript, and the latest iterations of the MERN stack. Additionally, I am proficient in utilizing advanced frontend design frameworks like Material-UI, Tailwind CSS and crafting responsive layouts.",
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
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgres SQL",
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
