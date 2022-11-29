import ContentLayout from '@/components/ContentLayout'
import NavLink from '@/components/NavLink'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <ContentLayout>
      <header>
        <h1 className="font-black text-4xl">About Me</h1>
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
          <span className="font-bold text-secondary-500">- I live&nbsp;</span>in
          South Sumatra, in a peaceful village. I am 18 years old, enthusiastic
          about computer and programming since high school.
        </p>
        <p className="text-lg mt-3">
          <span className="font-bold text-secondary-500">
            - Currently studying&nbsp;
          </span>
          data science and machine learning at university. The language skills
          that I have are HTML, CSS, JavaScript, PHP, and Python. However, I
          have not fully mastered all of that.
        </p>
        <p className="text-lg mt-3">
          <span className="font-bold text-secondary-500">
            - I&apos;m interested&nbsp;
          </span>
          in listening to music, watching YouTube, and editing photo.
        </p>
      </main>
    </ContentLayout>
  )
}

export default Home
