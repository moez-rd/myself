import { FC } from 'react'

interface Props {
  href: string
  children: React.ReactNode
}

const SocialLink: FC<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      target="blank_"
      className="font-bold underline hover:underline-offset-2"
    >
      {children}
    </a>
  )
}

export default SocialLink
