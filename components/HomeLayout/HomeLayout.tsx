import { FC } from 'react'
import s from './HomeLayout.module.css'
interface Props {
  children: string | JSX.Element | JSX.Element[]
}

const HomeLayout: FC<Props> = ({ children }) => {
  return <div className={s.root}>{children}</div>
}

export default HomeLayout
