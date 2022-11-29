import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
  href: string
  children: string | JSX.Element | JSX.Element[]
}

const NavLink: FC<Props> = ({ href, children }) => {
  const router = useRouter()

  return (
    <Link
      href={href}
      className="font-medium text-primary-400 hover:text-primary-600 transition duration-100 uppercase"
    >
      <span
        className={
          router.pathname == href ? 'border-b-2 text-secondary-500' : ''
        }
      >
        {children}
      </span>
    </Link>
  )
}

export default NavLink
