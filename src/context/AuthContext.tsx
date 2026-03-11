import React, { createContext, useContext, useState } from 'react'
import { USERS, type User } from '../data/users'

// ── Declaração Google GSI ─────────────────────────────────────
declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string
            callback: (response: { credential: string }) => void
            auto_select?: boolean
            cancel_on_tap_outside?: boolean
          }) => void
          renderButton: (element: HTMLElement, options: Record<string, unknown>) => void
          prompt: () => void
          disableAutoSelect: () => void
          revoke: (hint: string, callback: () => void) => void
        }
      }
    }
  }
}

interface AuthCtx {
  user: User | null
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>
  loginWithGoogle: (credential: string) => Promise<{ ok: boolean; error?: string }>
  logout: () => void
  isAuthenticated: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthCtx | null>(null)

// ── Decodifica JWT Google ─────────────────────────────────────
function decodeGoogleJwt(credential: string): { email?: string; name?: string } | null {
  try {
    const parts = credential.split('.')
    if (parts.length !== 3) return null
    const payload = parts[1]
    const padded = payload + '==='.slice((payload.length + 3) % 4)
    const decoded = atob(padded.replace(/-/g, '+').replace(/_/g, '/'))
    return JSON.parse(decoded)
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('ben_hub_user')
    return stored ? JSON.parse(stored) : null
  })

  // ── Login email/senha ────────────────────────────────────
  const login = async (email: string, password: string): Promise<{ ok: boolean; error?: string }> => {
    await new Promise(r => setTimeout(r, 600))
    const found = USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.active
    )
    if (!found) return { ok: false, error: 'E-mail ou senha incorretos, ou acesso não autorizado.' }
    setUser(found)
    localStorage.setItem('ben_hub_user', JSON.stringify(found))
    return { ok: true }
  }

  // ── Login Google OAuth ───────────────────────────────────
  const loginWithGoogle = async (credential: string): Promise<{ ok: boolean; error?: string }> => {
    const payload = decodeGoogleJwt(credential)
    if (!payload?.email) return { ok: false, error: 'Credencial Google inválida.' }

    const found = USERS.find(
      u => u.email.toLowerCase() === payload.email!.toLowerCase() && u.active
    )

    if (!found) {
      return {
        ok: false,
        error: `A conta Google "${payload.email}" não está autorizada neste sistema.`,
      }
    }

    setUser(found)
    localStorage.setItem('ben_hub_user', JSON.stringify(found))
    return { ok: true }
  }

  // ── Logout ───────────────────────────────────────────────
  const logout = () => {
    if (user?.email && window.google?.accounts?.id) {
      try {
        window.google.accounts.id.revoke(user.email, () => {})
      } catch {}
    }
    setUser(null)
    localStorage.removeItem('ben_hub_user')
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      loginWithGoogle,
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
