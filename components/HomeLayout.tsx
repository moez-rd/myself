import { FC } from 'react'

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-center px-4 sm:pl-80">
      {children}
    </div>
  )
}

export default HomeLayout