import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Card } from '../components/Card'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import styles from '../styles/pages/Home.module.css'


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  currentLife: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    currentLife= {props.currentLife}
    >
      <div className={styles.container}>
      <Head>
        <title>Início | FocusOn</title>
      </Head>

      <CountdownProvider>
      <section>
        <div>
          <Card />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
      
    </div>
    </ChallengesProvider>
    
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted, currentLife } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      currentLife: Number(currentLife)
    }
  }
}