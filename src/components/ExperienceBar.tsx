import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  return (
    <div className={ styles.experienceBar }>
      <span>* XP</span>
      <div>
        <div style={{ width: '50%'}} />
      </div>
      <span>300/600</span>
    </div>
  )
}