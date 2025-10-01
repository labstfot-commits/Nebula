import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru" className="dark">
      <Head>
        <link rel="icon" href="/nebula-logoo.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="bg-black text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


