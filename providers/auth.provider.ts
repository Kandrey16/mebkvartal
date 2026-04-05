'use client'

import { authService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth.store'
import { useEffect, useRef } from 'react'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const login = useAuthStore(state => state.login)
  const logout = useAuthStore(state => state.logout)
  const setLoading = useAuthStore(state => state.setLoading)

  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    
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
  }, [])

  return children
}
