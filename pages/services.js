import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Services from '../component/pages/services'

export default function OurSevices() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Services/>
    </div>
  )
}
