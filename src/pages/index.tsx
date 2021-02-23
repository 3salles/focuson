import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/Countdown'
import { Profile } from '../components/Profile'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | FocusOn</title>
      </Head>
      
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
