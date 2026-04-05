import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  id: string
  email: string
  role: string
  name: string
  surname: string
  imageUrl: string
  phoneNumber: string
}

type AuthState = {
  accessToken: string | null
  user: User | null
  isAuth: boolean
  isLoading: boolean
  okay: string | null

  login: (token: string, user: User) => void
  logout: () => void
  setLoading: (loading: boolean) => void
  setOkay: (okay: string) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      accessToken: null,
      user: null,
      isAuth: false,
      isLoading: true,
      okay: null,

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
        }),

      setOkay: okay => set({ okay: okay })
    }),
    {
      name: 'auth-storage'
    }
  )
)
