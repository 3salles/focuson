import styles from '../styles/components/Card.module.css'
import { CompletedChallenges } from './CompletedChallenges'
import { Countdown } from './Countdown'
import { Profile } from './Profile'

export function Card() {
  return (
    <div className={styles.cardContainer}>
      <Profile />
      <CompletedChallenges />
      <Countdown />
    </div>
  )
}