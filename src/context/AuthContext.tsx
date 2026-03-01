import React, { createContext, useContext, useState, useEffect } from 'react'
import { USERS, type User } from '../data/users'

interface AuthCtx {
  user: User | null
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  logout: () => void
  isAuthenticated: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthCtx | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('ben_hub_user')
    return stored ? JSON.parse(stored) : null
  })

  const login = async (email: string, password: string): Promise<{ ok: boolean; error?: string }> => {
    await new Promise(r => setTimeout(r, 600)) // simula latência
    const found = USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.active
    )
    if (!found) return { ok: false, error: 'E-mail ou senha incorretos, ou acesso não autorizado.' }
    setUser(found)
    localStorage.setItem('ben_hub_user', JSON.stringify(found))
    return { ok: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('ben_hub_user')
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin',
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
