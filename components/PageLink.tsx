import Link from 'next/link'
import { FC } from 'react'

interface Props {
  href: string
  children: string | JSX.Element | JSX.Element[]
}

const PageLink: FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="font-semibold px-4 py-1.5 text-secondary-50 rounded-lg hover:bg-secondary-600 transition duration-100 bg-secondary-500"
    >
      {children}
    </Link>
  )
}

export default PageLink
