import { NextPage } from 'next'
import Head from 'next/head'
import { ContentLayout, ContentNav, PageTitle } from '@/components/index'

const Home: NextPage = () => {
  return (
    <ContentLayout>
      <Head>
        <title>Rahmat - About</title>
      </Head>
      <header>
        <PageTitle>About Me</PageTitle>
      </header>
      <ContentNav />
      <main className="mt-8 sm:mt-12 max-w-xl">
        <p className="md:text-lg mt-3">
          <span className="font-bold text-secondary-500">- I live&nbsp;</span>in
          South Sumatra, in a peaceful village. I am 19 years old, enthusiastic
          about computer and programming since high school.
        </p>
        <p className="md:text-lg mt-3">
          <span className="font-bold text-secondary-500">
            - Currently studying&nbsp;
          </span>
          data science and machine learning at university. The language skills
          that I have are HTML, CSS, JavaScript, PHP, and Python. However, I
          have not fully mastered all of that.
        </p>
        <p className="md:text-lg mt-3">
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
