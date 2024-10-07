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
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa"

// Navigation Links
export const navLinks = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
]

// Resume Page Data
// About Me Data
export const aboutMe = {
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
export const experience = {
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
export const education = {
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
export const skills = {
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

// Service Page Data

export const services = [
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

// Stats Data- HomePage
export const stats = [
  {
    num: 5,
    text: "Years of Experience",
  },
  {
    num: 8,
    text: "Projects completed",
  },
  {
    num: 20,
    text: "Technologies mastered",
  },
  {
    num: 400,
    text: "Code commits",
  },
]

// social Accounts - HomePage
export const socialLinks = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
]
