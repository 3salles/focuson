import { FaHeart }  from 'react-icons/fa'

import styles from '../styles/components/LifeBar.module.css'

export function LifeBar() {
  return (
    <>
    <div className={ styles.lifeBar }>
      <span><FaHeart /></span>
      <div className={styles.lifeProgress}>
        <div style={{ width: '100%'}} />
      </div>
    </div>
    <div className={styles.lifeStatus}>
      <div>HP</div>
      <div>50/50</div>
    </div>
    </>
  )
}