import { useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)


  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <>
    <div className={ styles.experienceBar }>
      <span><FaStar /></span>
      <div className={styles.experienceProgress}>
        <div style={{ width: `${percentToNextLevel}%` }} />
      </div>
      
    </div>
    <div className={styles.status}>
    <div>XP</div>
    <div>{ currentExperience }/{ experienceToNextLevel }</div>
    </div>
    </>
  )
}