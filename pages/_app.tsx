import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fira_Sans } from '@next/font/google'
import NextNProgress from 'nextjs-progressbar'

const firaSans = Fira_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-fira-sans',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#71717a" />
      <div className={`${firaSans.variable} font-primary`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
