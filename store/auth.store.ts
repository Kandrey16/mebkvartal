import { IApiUser } from '@/types/api.interface'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthState = {
  accessToken: string | null
  user: IApiUser | null
  isAuth: boolean
  isLoading: boolean

  registration: (toke: string, user: IApiUser) => void
  login: (token: string, user: IApiUser) => void
  logout: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      user: null,
      isAuth: false,
      isLoading: true,

      registration: (token, user) =>
        set({
          accessToken: token,
          user: user,
          isAuth: true,
          isLoading: false
        }),

      login: (token, user) =>
        set({
          accessToken: token,
          user: user,
          isAuth: true,
          isLoading: false
        }),

      logout: () =>
        set({
          accessToken: null,
          user: null,
          isAuth: false,
          isLoading: false
        }),

      setLoading: loading =>
        set({
          isLoading: loading
        })
    }),
    {
      name: 'auth-storage'
    }
  )
)
