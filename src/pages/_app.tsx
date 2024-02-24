import type { AppProps } from 'next/app'
import React from 'react'
import { Nunito_Sans } from 'next/font/google'

const nunito_sans = Nunito_Sans({
  subsets: ['latin']
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito_sans.className}>
      <Component {...pageProps} />
    </main>)
}