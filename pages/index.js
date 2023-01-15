import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>QRRA</title>
        <meta name="description" content="QRRA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.page_wrapper}>
        <div className={styles.nav}>
          <div className={styles.container + ' ' + styles.container_in_nav}>
            <a className={styles.logo}>
              <img src="https://uploads-ssl.webflow.com/62b081964bde0eb62d67b133/63285aae70bf8d04cab05d83_osiris-logo.svg" loading="lazy" alt="" className={styles.logo_img} />
            </a>
            <nav>
              <a>test</a>
            </nav>
          </div>
        </div>
      </main>
    </>
  )
}
