export default interface Post {
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
