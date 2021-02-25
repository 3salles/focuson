import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =  useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded(){
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountdown()
  }

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
            onClick={handleChallengeFailed}
            >
              Falhei</button>

            <button
            type='button'
            className={styles.challengeSucceededButton}
            onClick={handleChallengeSucceeded}
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