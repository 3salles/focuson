import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.profile}><Profile /></div>
        <div></div>
      </section>
    </div>
  )
}
