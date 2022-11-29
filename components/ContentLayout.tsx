import { FC } from 'react'

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

const ContentLayout: FC<Props> = ({ children }) => {
  return <div className="mt-20 pl-80">{children}</div>
}

export default ContentLayout
