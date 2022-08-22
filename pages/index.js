import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Give Water Give Life</title>
        <meta name="description" content="One Survivor's Vision to Help Save Lives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1 className="text-8xl">
          Hello!
      </h1>
    </div>
  )
}
