import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  return (
    <>
    <div className={ styles.experienceBar }>
      <span>*</span>
      <div className={styles.experienceProgress}>
        <div style={{ width: '50%'}} />
      </div>
      
    </div>
    <div className={styles.status}>
    <span>XP</span>
    <span>300/600</span>
    </div>
    </>
  )
}