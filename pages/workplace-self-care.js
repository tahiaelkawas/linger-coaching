import Head from 'next/head'
import WorkplaceSelfCare from '../component/pages/WorkplaceSelfCare'
import styles from '../styles/Home.module.css'

export default function WorkplaceSelfCarePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WorkplaceSelfCare/>
    </div>
  )
}
