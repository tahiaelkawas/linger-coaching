import Head from 'next/head'
import SchoolDisc from '../component/pages/schoolDisc'
import styles from '../styles/Home.module.css'

export default function SchoolDiscPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SchoolDisc/>
    </div>
  )
}
