import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import type Post from '@/lib/types/Post'
import {
  ContentLayout,
  ContentNav,
  PageTitle,
  PostFeed,
} from '@/components/index'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://dev.to/api/articles?username=bzz`)
  const posts: Post[] = await res.json()
  return { props: { posts } }
}

interface Props {
  posts: Post[]
}

const Blogs: NextPage<Props> = (props: Props) => {
  return (
    <ContentLayout>
      <Head>
        <title>Rahmat - Blogs</title>
      </Head>
      <header>
        <PageTitle>Blogs</PageTitle>
      </header>
      <ContentNav />
      <main className="mt-8 mb-12 space-y-8 sm:mt-12 max-w-xl">
        <PostFeed posts={props.posts}></PostFeed>
      </main>
    </ContentLayout>
  )
}

export default Blogs
