import Head from 'next/head'
import ShortPlan from '../component/pages/shortPlan'
import styles from '../styles/Home.module.css'

export default function Short() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShortPlan/>
    </div>
  )
}
