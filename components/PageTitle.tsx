import { FC } from 'react'

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

const PageTitle: FC<Props> = ({ children }) => {
  return <h1 className="font-black text-3xl sm:text-4xl">{children}</h1>
}

export default PageTitle
