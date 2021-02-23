import { FaStar } from 'react-icons/fa'

import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  return (
    <>
    <div className={ styles.experienceBar }>
      <span><FaStar /></span>
      <div className={styles.experienceProgress}>
        <div style={{ width: '50%'}} />
      </div>
      
    </div>
    <div className={styles.status}>
    <div>XP</div>
    <div>300/600</div>
    </div>
    </>
  )
}