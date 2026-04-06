import { useAuthStore } from '@/store/auth.store'
import axios from 'axios'

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_CLIENT_API
})

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${useAuthStore.getState().accessToken}`
  return config
})

$api.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_CLIENT_API}/auth/refresh`, {
          withCredentials: true
        })

        useAuthStore.getState().login(res.data.accessToken, res.data.user)

        return $api.request(originalRequest)
      } catch {
        console.log('Не авторизован')

        //useAuthStore.getState().logout()
      }
    }

    throw error
  }
)

export default $api
