import Head from 'next/head'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className={`${inter.className} layout`}>
      <Head>
        <title>SystemTec Loja Online</title>
        <meta name='description' content='Loja Online - Ecommerce' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/zishop.ico' />
      </Head>

      <header>
        <Navbar />
      </header>

      <main className='main-container'>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
