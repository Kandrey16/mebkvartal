import { authService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth.store'

let isRefreshing = false
let refreshPromise: Promise<any> | null = null

export async function apiFetch(url: string, options: RequestInit = {}) {
  const accessToken = useAuthStore.getState().accessToken

  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${accessToken}`
    }
  })

  if (res.status !== 401) {
    return res
  }

  if (!isRefreshing) {
    isRefreshing = true
    refreshPromise = authService
      .refresh()
      .then(data => {
        useAuthStore.getState().login(data.accessToken, data.user)
        return data.accessToken
      })
      .catch(() => {
        useAuthStore.getState().logout()
        throw new Error('Unauthorized')
      })
      .finally(() => {
        isRefreshing = false
      })
  }

  const newAccessToken = await refreshPromise

  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authrozation: `Bearer ${newAccessToken}`
    }
  })
}
