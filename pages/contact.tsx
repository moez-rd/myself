import ContentLayout from '@/components/ContentLayout'
import FormAlert from '@/components/FormAlert'
import FormInput from '@/components/FormInput'
import FormTextarea from '@/components/FormTextarea'
import NavLink from '@/components/NavLink'
import PageTitle from '@/components/PageTitle'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'

const Contact: NextPage = () => {
  const [isSending, setIsSending] = useState(false)
  const [hasSent, setHasSent] = useState(false)
  const [isError, setIsError] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setHasSent(false)
    setIsError(false)

    const formData = new FormData()
    formData.append('Name', name)
    formData.append('Email', email)
    formData.append('Message', message)

    setName('')
    setEmail('')
    setMessage('')

    const endpoint =
      'https://script.google.com/macros/s/AKfycbwaefQDU-leSbcPw1FT5vbyJC22wwcSBUfh0me8BmCqbKgsku4llZCMpQTUUW3beLK6hw/exec'
    const options = {
      method: 'POST',
      body: formData,
    }

    fetch(endpoint, options)
      .then(() => {
        setHasSent(true)
      })
      .catch(() => {
        setIsError(true)
      })
      .finally(() => {
        setIsSending(false)
      })
  }

  return (
    <ContentLayout>
      <Head>
        <title>Rahmat - Contact</title>
      </Head>
      <header>
        <PageTitle>Contact Me</PageTitle>
      </header>
      <nav className="mt-3 sm:mt-6">
        <ul className="flex space-x-4">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <main className="mt-8 sm:mt-12 max-w-md">
        <p className="text-primary-500">
          Want to send me a message? fill the form below.
        </p>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="Name"
            id="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            name="Email"
            id="Email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormTextarea
            name="Message"
            id="Message"
            placeholder="Something to say"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex relative justify-end mt-3 items-center">
            {/* Alerts */}
            <div className="absolute left-0">
              {isError && (
                <FormAlert
                  message="Something is error"
                  type="danger"
                  onClose={() => setIsError(false)}
                />
              )}

              {hasSent && (
                <FormAlert
                  message="Successfully sent"
                  type="success"
                  onClose={() => setHasSent(false)}
                />
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSending}
              className={`bg-secondary-500 py-2 w-36 px-4 font-medium rounded-lg hover:bg-secondary-600 transition duration-100 text-secondary-50 ${
                isSending && 'disabled:bg-primary-400 text-primary-700'
              }`}
            >
              {!isSending ? (
                <span>
                  Send&nbsp;
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
              ) : (
                'Sending...'
              )}
            </button>
          </div>
        </form>
      </main>
    </ContentLayout>
  )
}

export default Contact
