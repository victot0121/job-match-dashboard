"use client"

import { createContext, type ReactNode, useState } from "react"

interface UserContextType {
  userSkills: string[]
  addSkill: (skill: string) => void
  removeSkill: (skill: string) => void
}

export const UserContext = createContext<UserContextType>({
  userSkills: [],
  addSkill: () => {},
  removeSkill: () => {},
})

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  // Mock user skills - in a real app, this would come from a user profile
  const [userSkills, setUserSkills] = useState<string[]>(["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"])

  const addSkill = (skill: string) => {
    if (!userSkills.includes(skill)) {
      setUserSkills([...userSkills, skill])
    }
  }

  const removeSkill = (skill: string) => {
    setUserSkills(userSkills.filter((s) => s !== skill))
  }

  return <UserContext.Provider value={{ userSkills, addSkill, removeSkill }}>{children}</UserContext.Provider>
}

