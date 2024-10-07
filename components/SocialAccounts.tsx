import { socialLinks } from "@/data"
import Link from "next/link"

const SocialAccounts = ({
  containerStyles,
  iconsStyles,
}: {
  containerStyles: string
  iconsStyles: string
}) => {
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
