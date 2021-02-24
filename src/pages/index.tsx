import { Card } from '../components/Card'
import { ChallengeBox } from '../components/ChallengeBox'

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
          <Card />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
