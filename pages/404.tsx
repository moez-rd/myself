import { NextPage } from 'next'
import Head from 'next/head'
import { ContentLayout, ContentNav, PageTitle } from '@/components/index'

const Page404: NextPage = () => {
  return (
    <ContentLayout>
      <Head>
        <title>404: Not Found</title>
      </Head>
      <header>
        <PageTitle>404</PageTitle>
      </header>
      <ContentNav />
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
