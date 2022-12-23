import { NextPage } from 'next'
import Head from 'next/head'
import { ContentLayout, ContentNav, PageTitle } from '@/components/index'

const Page500: NextPage = () => {
  return (
    <ContentLayout>
      <Head>
        <title>500: Server Error</title>
      </Head>
      <header>
        <PageTitle>500</PageTitle>
      </header>
      <ContentNav />
      <main className="mt-8 sm:mt-12 max-w-xl">
        <p className="text-2xl mt-3">
          <span className="font-bold text-secondary-500">
            500: Server Error
          </span>
        </p>
      </main>
    </ContentLayout>
  )
}

export default Page500
