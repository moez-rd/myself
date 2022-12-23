import { NextPage } from 'next'
import Head from 'next/head'
import {
  ContentLayout,
  ContentNav,
  PageTitle,
  ProjectFeed,
} from '@/components/index'
import projects from '../projects'

const Projects: NextPage = () => {
  return (
    <ContentLayout>
      <Head>
        <title>Rahmat - Projects</title>
      </Head>
      <header>
        <PageTitle>Projects</PageTitle>
      </header>
      <ContentNav />
      <main className="mt-8 space-y-8 sm:mt-12 max-w-xl">
        <ProjectFeed projects={projects} />
      </main>
    </ContentLayout>
  )
}

export default Projects
