'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

interface AuthContextType {
  user: any | null
  roles: string[]
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null)
  const [roles, setRoles] = useState<string[]>([])

  // Här kan vi läsa in användaren vid start (t.ex. från en cookie-check)
  
  return (
    <AuthContext.Provider value={{ user, roles, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)