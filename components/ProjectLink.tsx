import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface Props {
  href: string
  children: string | JSX.Element | JSX.Element[]
}

const ProjectLink: FC<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="blank_"
      className="font-bold underline hover:underline-offset-2"
    >
      {children}&nbsp;
      <FontAwesomeIcon icon={faArrowRightLong} />
    </a>
  )
}

export default ProjectLink
