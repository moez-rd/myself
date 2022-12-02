import ContentLayout from '@/components/ContentLayout'
import NavLink from '@/components/NavLink'
import PageTitle from '@/components/PageTitle'
import ProjectLink from '@/components/ProjectLink'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import Head from 'next/head'

const Projects: NextPage = () => {
  return (
    <ContentLayout>
      <Head>
        <title>Rahmat - Projects</title>
      </Head>
      <header>
        <PageTitle>Projects</PageTitle>
      </header>
      {/* NAV */}
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
      <main className="mt-8 space-y-8 sm:mt-12 max-w-xl">
        <div>
          <h2 className="text-2xl font-bold">KBBI Daring</h2>
          <p className="text-lg mt-1">
            <span className="font-bold text-secondary-500">- A web-based </span>
            KBBI application with a minimalistic appearance and easy to use. It
            has night mode feature and responsive. Built using Nuxt.js and
            Tailwindcss.
          </p>
          <ProjectLink href="https://kbbidaring.netlify.app/">
            Live preview
          </ProjectLink>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Soekarno Tribute</h2>
          <p className="text-lg mt-3">
            <span className="font-bold text-secondary-500">
              - My assignment&nbsp;
            </span>
            from freeCodeCamp.org. Very simple.
          </p>
          <ProjectLink href="https://soekarno-tribute.netlify.app/">
            Live preview
          </ProjectLink>
        </div>
      </main>
    </ContentLayout>
  )
}

export default Projects
