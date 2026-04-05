import { create } from 'zustand'

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

  login: (token: string, user: User) => void
  logout: () => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthState>(set => ({
  accessToken: null,
  user: null,
  isAuth: false,
  isLoading: true,

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

  setLoading(loading) {
    set({
      isLoading: loading
    })
  }
}))
