import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/jpg" href="favicon.ico" />
        <meta
          name="description"
          content="This is about me, a student at Sriwijaya University in Indonesia"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
