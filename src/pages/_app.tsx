import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from 'component/Navbar'
import Footer from 'component/Footer'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}
