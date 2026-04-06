'use client'

import { useAuth } from '@/hooks/useAuth'
import { useAuthStore } from '@/store/auth.store'
import { useEffect } from 'react'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { accessToken } = useAuthStore()
  const { checkAuth } = useAuth()

  useEffect(() => {
    if (accessToken) {
      checkAuth()
    }
  }, [])
  return children
}
