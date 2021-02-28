import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal';


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
  levelDown: () => void;
  closeLevelUpModal: () => void;
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
  const MAX_LIFE = 50
  const [level, setLevel] = useState(rest.level ?? 1);
  const [maxLife, setMaxLife] = useState(MAX_LIFE)
  const [currentLife, setCurrentLife] = useState(rest.currentLife ?? MAX_LIFE)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.currentExperience ?? 0)

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOPen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


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
    setCurrentLife(maxLife)
    setIsLevelUpModalOPen(true)
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOPen(false)
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
    levelDown()
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  function levelDown() {    
    let finalLife = currentLife - 5
    setCurrentLife(finalLife)
    if (finalLife <= 0) {
      setLevel(level - 1)
      setMaxLife(MAX_LIFE)
      setCurrentLife(MAX_LIFE)
      setCurrentExperience(0)
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
        // failChallenge,
        levelDown,
        closeLevelUpModal
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  )
}