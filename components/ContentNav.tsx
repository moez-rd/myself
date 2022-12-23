import { FC } from 'react'
import NavLink from './NavLink'

const ContentNav: FC = () => {
  return (
    <nav className="mt-3 sm:mt-6">
      <ul className="flex space-x-4">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default ContentNav
