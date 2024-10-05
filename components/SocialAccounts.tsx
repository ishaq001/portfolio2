import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"

const socialLinks = [
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

const SocialAccounts = ({ containerStyles, iconsStyles }: any) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map(({ icon, path }, index) => {
        return (
          <Link
            key={index}
            href={path}
            className={iconsStyles}
          >
            {icon}
          </Link>
        )
      })}
    </div>
  )
}

export default SocialAccounts
