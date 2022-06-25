import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../component/pages/home'

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Linger Coaching</title>
        <meta name="description" content="Linger coaching center" />
        <link rel="icon" href="assets/images/Logo_Final.gif" />
      </Head>
      <Home/>
    </div>
  )
}
