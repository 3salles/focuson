import { useContext } from 'react'
import { FaHeart }  from 'react-icons/fa'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/LifeBar.module.css'

export function LifeBar() {
  const { maxLife, currentLife } = useContext(ChallengesContext)

  const percentLife = Math.round( currentLife * 100) / maxLife

  return (
    <>
    <div className={ styles.lifeBar }>
      <span><FaHeart /></span>
      <div className={styles.lifeProgress}>
        <div style={{ width: `${percentLife}%`}} />
      </div>
    </div>
    <div className={styles.lifeStatus}>
      <div>HP</div>
      <div>{currentLife}/{maxLife}</div>
    </div>
    </>
  )
}