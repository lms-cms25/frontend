'use client'

import { identityUser } from '@/types/identityUser';
import { createContext, useContext, useState } from 'react'; 

interface AuthContextType {
  user: identityUser | null;
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode;
  initialUser: identityUser | null;
}

export function AuthProvider({ children, initialUser }: AuthProviderProps) {

  const [user] = useState<identityUser | null>(initialUser)

  // console.log(user);
  

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  
  const context = useContext(AuthContext)

    if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}