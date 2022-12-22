import { NextPage } from 'next'
import Head from 'next/head'
import type Project from '@/lib/types/Project'
import {
  ContentLayout,
  NavLink,
  PageTitle,
  ProjectFeed,
} from '@/components/index'
import my_projects from '../projects.json'
const projects: Project[] = my_projects

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
        <ProjectFeed projects={projects} />
      </main>
    </ContentLayout>
  )
}

export default Projects
