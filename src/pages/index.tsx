import { ExperienceBar } from '../components/ExperienceBar'
import { LifeBar } from '../components/LifeBar'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <>
      <ExperienceBar />
      <LifeBar />
      </>

      <section>
        <div className={styles.profile}><Profile /></div>
        <div></div>
      </section>
    </div>
  )
}
