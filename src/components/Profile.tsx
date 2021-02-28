import { useContext } from 'react'
import {ImArrowUp} from 'react-icons/im'
import { ExperienceBar } from '../components/ExperienceBar'
import { LifeBar } from '../components/LifeBar'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <div className={styles.avatarImage}>
            <img src="https://user-images.githubusercontent.com/62452619/108862320-e0ca5000-75ce-11eb-8778-a2c1b3e01453.png" alt="Female Avatar" />
          </div>
          <div>
            <p> <ImArrowUp className={styles.levelIcon}/> Level <strong>{level}</strong></p>
          </div>
        </div>
      </div>
      <div className={styles.infos}>
        <strong>DarkIceFoxy</strong>
        <ExperienceBar />
        <LifeBar />
      </div>

    </div>
  );
}