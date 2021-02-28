import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
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
  levelDown: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  currentLife: number;
}


export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ 
  children, 
  ...rest
  }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [maxLife, setMaxLife] = useState(10)
  const [currentLife, setCurrentLife] = useState(maxLife)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.currentExperience ?? 0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level +1) * 4, 2)
  const maxLifeLevel = Math.floor(maxLife + (1 * (level/2)))

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
    Cookies.set('currentLife', String(currentLife))

  }, [level, currentExperience, challengesCompleted, currentLife])

  function levelUp() {
    setLevel(level + 1)
    setMaxLife(maxLifeLevel)
    setCurrentLife(maxLifeLevel)
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

    else if (currentLife <= 0){
      levelDown()
    }

    let finalLife = currentLife - 5
    setCurrentLife(finalLife)
    setActiveChallenge(null)
  }

  function levelDown() {
    setLevel(level - 1)
    if (currentLife <= 0){
      setMaxLife(maxLifeLevel)
      setCurrentLife(maxLifeLevel)
    }
    
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
        failChallenge,
        levelDown
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}