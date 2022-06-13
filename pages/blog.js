import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Blog from '../component/pages/blog'

export default function BlogsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog/>
    </div>
  )
}
