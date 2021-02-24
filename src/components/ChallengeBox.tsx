import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge } =  useContext(ChallengesContext)

  return(
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.gif`} alt="Pixel gif"/>
            <strong>{activeChallenge.title}</strong>
            <p>{activeChallenge.description}</p>
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