import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from '../component/pages/about'

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About/>
    </div>
  )
}
