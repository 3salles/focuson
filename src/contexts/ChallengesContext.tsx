import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'


interface Challenge {
  type: 'dragon' | 'medusa';
  title: string;
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  maxLife: number;
  currentLife: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  failChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [maxLife, setMaxLife] = useState(50)
  const [currentLife, setCurrentLife] = useState(maxLife)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level +1) * 4, 2)
  const maxLifeToNextLevel = Math.floor(maxLife + (1 * (level/2)))

  useEffect(() => {
    Notification.requestPermission()
  }, [])


  function levelUp() {
    setLevel(level + 1)
    setMaxLife(maxLifeToNextLevel)
    setCurrentLife(maxLifeToNextLevel)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification(`${challenge.title}!`, {
        body: `Valendo ${challenge.amount}xp!`,
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel){
      finalExperience =  finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  function failChallenge () {
    if (!activeChallenge) {
      return
    }

    let finalLife = currentLife - 5
    setCurrentLife(finalLife)
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        maxLife,
        currentLife,
        challengesCompleted,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        failChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}