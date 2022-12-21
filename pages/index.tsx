import { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import SocialLink from '@/components/SocialLink'
import PageLink from '@/components/PageLink'
import HomeLayout from '@/components/HomeLayout'
import Head from 'next/head'

import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
} from 'react-icons/ri'

const Home: NextPage = () => {
  const typedEl = useRef(null)
  const strings = ["I'm Web Developer", "I'm Data Scientist", "I'm Designer"]

  useEffect(() => {
    const typed = new Typed(typedEl.current ?? '#typed', {
      strings: strings,
      startDelay: 300,
      typeSpeed: 200,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '_',
    })

    return () => {
      typed.destroy()
    }
  })

  return (
    <HomeLayout>
      <Head>
        <title>Rahmat</title>
      </Head>
      {/* HEADER */}
      <header>
        <Image
          src="/profile-90x90.png"
          width={90}
          height={90}
          alt="My profile photo"
          className="rounded-full"
        />
        <h1 className="text-lg sm:text-2xl mt-6 text-primary-600">
          Hi, my name is Rahmat
        </h1>
        <div className="text-3xl sm:text-5xl text-secondary-500 font-medium">
          <span
            ref={typedEl}
            id="typed"
            className="typed-text text-primary-700 font-black"
          ></span>
        </div>
      </header>
      {/* MAIN */}
      <main className="mt-4 sm:mt-8">
        <p className="sm:text-lg">
          <span className="font-bold text-secondary-500">- A Student</span> at
          Sriwijaya University in Indonesia
        </p>
        <ul className="flex space-x-2 sm:space-x-4 mt-0.5">
          <li>
            <SocialLink href="https://github.com/moez-rd">
              <RiGithubFill /> GitHub
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://www.instagram.com/moez.muhardin">
              <RiLinkedinBoxFill /> LinkedIn
            </SocialLink>
          </li>
          <li>
            <SocialLink href="https://www.linkedin.com/in/rahmat-tullah-085b89221">
              <RiInstagramFill /> Instagram
            </SocialLink>
          </li>
        </ul>
      </main>
      {/* NAV */}
      <nav className="mt-10 sm:mt-8">
        <ul className="flex space-x-1">
          <li>
            <PageLink href="/projects">Projects</PageLink>
          </li>
          <li>
            <PageLink href="/blogs">Blogs</PageLink>
          </li>
          <li>
            <PageLink href="/contact">Contact</PageLink>
          </li>
          <li>
            <PageLink href="/about">About</PageLink>
          </li>
        </ul>
      </nav>
    </HomeLayout>
  )
}

export default Home
