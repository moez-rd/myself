import { FC } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'

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
      {children}<RiArrowRightLine className="inline" />
    </a>
  )
}

export default ProjectLink
