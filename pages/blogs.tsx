import ContentLayout from '@/components/ContentLayout'
import NavLink from '@/components/NavLink'
import PageTitle from '@/components/PageTitle'
import { NextPage } from 'next'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://dev.to/api/articles?username=bzz`)
  const data: Post[] = await res.json()
  console.log(data)

  // Pass data to the page via props
  return { props: { data } }
}

interface Post {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  collection_id: number | null
  published_timestamp: Date
  positive_reactions_count: number
  cover_image: string | null
  social_image: string
  canonical_url: string
  created_at: Date
  edited_at: Date
  crossposted_at: Date | null
  published_at: Date
  last_comment_at: Date
  reading_time_minutes: number
  tag_list: string[]
  tags: string[]
  user: {
    name: string
    username: string
    twitter_username: string | null
    github_username: string | null
    user_id: number
    website_url: string | null
    profile_image: string
    profile_image_90: string
  }
}

interface Props {
  data: Post[]
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
        <p className="text-lg mt-3">
          <span className="font-bold text-secondary-500">- I currently </span>
          don&apos;t have blog
        </p>
        <p>{props.data[0].canonical_url}</p>
      </main>
    </ContentLayout>
  )
}

export default Blogs
