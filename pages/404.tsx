import ContentLayout from '@/components/ContentLayout'
import NavLink from '@/components/NavLink'
import PageTitle from '@/components/PageTitle'
import { NextPage } from 'next'
import Head from 'next/head'

const Page404: NextPage = () => {
  return (
    <ContentLayout>
      <Head>
        <title>404: Not Found</title>
      </Head>
      <header>
        <PageTitle>404</PageTitle>
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
      <main className="mt-8 sm:mt-12 max-w-xl">
        <p className="text-2xl mt-3">
          <span className="font-bold text-secondary-500">
            404: Page Not Found
          </span>
        </p>
      </main>
    </ContentLayout>
  )
}

export default Page404
