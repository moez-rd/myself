import ContentLayout from '@/components/ContentLayout'
import NavLink from '@/components/NavLink'
import { NextPage } from 'next'

const Blogs: NextPage = () => {
  return (
    <ContentLayout>
      <header>
        <h1 className="font-black text-4xl">Blogs</h1>
      </header>
      {/* NAV */}
      <nav className="mt-6">
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
      <main className="mt-12 max-w-xl">
        <p className="text-lg mt-3">
          <span className="font-bold text-secondary-500">- I currently </span>
          don&apos;t have blog
        </p>
      </main>
    </ContentLayout>
  )
}

export default Blogs
