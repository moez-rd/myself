import { FC } from 'react'

interface Props {
  children: string
}

const FeedTag: FC<Props> = ({ children }) => {
  return (
    <span>
      <span className="text-secondary-500 font-bold">#</span>
      {children}
    </span>
  )
}

export default FeedTag
