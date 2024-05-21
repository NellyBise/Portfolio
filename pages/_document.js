import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export default function Document() {
  return (
    <Html lang="fr">
      <Head className="">
        <title>Nelly</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=League+Gothic&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
