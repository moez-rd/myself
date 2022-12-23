import { FC } from 'react'
import s from './ContentLayout.module.css'

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

const ContentLayout: FC<Props> = ({ children }) => {
  return <div className={s.root}>{children}</div>
}

export default ContentLayout
