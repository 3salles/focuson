import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true

  return(
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 XP</header>
          <main>
            <img src="https://user-images.githubusercontent.com/62452619/109048994-7c82bb80-76b6-11eb-8453-d8443b53cea0.gif" 
            alt="Dragon pixel gif"/>
            <strong>Fuja do Dragão</strong>
            <p>O dragão acordou! Para derrotar o dragão, beba água!</p>
          </main>
          <footer>
            <button
            type='button'
            className={styles.challengeFailedButton}
            >
              Falhei</button>

            <button
            type='button'
            className={styles.challengeSucceededButton}
            >
              Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize uma tarefa para receber recompensas</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up icon"/>
          Suba de nível terminando suas tarefas.
        </p>
      </div>
      )}
      
    </div>
  )
}