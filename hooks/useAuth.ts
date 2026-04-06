'use client'
import { authService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth.store'

export function useAuth() {
  const { login, setLoading, logout } = useAuthStore()

  async function checkAuth() {
    setLoading(true)
    try {
      const response = await authService.refresh()
      const { accessToken, user } = response.data
      login(accessToken, user)
    } catch {
      logout()
    } finally {
      setLoading(false)
    }
  }

  async function logOut() {
    await authService.logout()
    logout()
  }

  return { checkAuth, logOut }
}
