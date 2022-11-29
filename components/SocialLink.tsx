import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Props {
  icon: IconDefinition
  href: string
  children: string | JSX.Element | JSX.Element[]
}

const SocialLink: FC<Props> = ({ icon, href, children }) => {
  return (
    <a
      href={href}
      target="blank_"
      className="font-bold underline hover:underline-offset-2"
    >
      <FontAwesomeIcon icon={icon} /> {children}
    </a>
  )
}

export default SocialLink
