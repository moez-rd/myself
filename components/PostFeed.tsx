import Post from '@/lib/types/Post'
import { BsDot } from 'react-icons/bs'
import { FC } from 'react'
import ExternalLink from './ExternalLink'
import FeedTag from './FeedTag'

interface Props {
  posts: Post[]
}

const PostFeed: FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <div className="flex space-x-1 sm:space-x-2 text-xs sm:text-sm text-primary-500">
            {post.tag_list.map((tag, key) => (
              <FeedTag key={key}>{tag}</FeedTag>
            ))}
          </div>
          <p className="md:text-lg mt-1">{post.description}</p>
          <div className="flex space-x-0.5 items-center">
            <p className="text-primary-500 text-sm">
              {post.readable_publish_date}
            </p>
            <BsDot />
            <p className="text-primary-500 text-sm">
              {post.reading_time_minutes} min read
            </p>
            <BsDot />
            <ExternalLink href={post.url}>Read this blog</ExternalLink>
          </div>
        </div>
      ))}
    </>
  )
}

export default PostFeed
