import styles from '../styles/components/LifeBar.module.css'

export function LifeBar() {
  return (
    <div className={ styles.lifeBar }>
      <span>S2 HP</span>
      <div>
        <div style={{ width: '100%'}} />
      </div>
      <span>50/50</span>
    </div>
  )
}