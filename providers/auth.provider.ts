'use client'

import { authService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth.store'
import { useEffect } from 'react'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)
  const setLoading = useAuthStore(state => state.setLoading)

  useEffect(() => {
    const refreshAuth = async () => {
      try {
        const data = await authService.refresh()
        login(data.accessToken, data.user)
      } catch {
        logout()
      } finally {
        setLoading(false)
      }
    }
    refreshAuth()
  }, [login, logout, setLoading])

  return children
}
