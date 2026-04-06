import $api from '@/lib/apiClient'
import { IAuthResponseData } from '@/types/api.interface'
import axios, { AxiosResponse } from 'axios'

class AuthService {
  async signUp(data: {
    email: string
    password: string
  }): Promise<AxiosResponse<IAuthResponseData>> {
    return $api.post<IAuthResponseData>('/api/auth/signUp', data)
  }

  async signIn(data: {
    email: string
    password: string
  }): Promise<AxiosResponse<IAuthResponseData>> {
    return $api.post<IAuthResponseData>('/api/auth/signIn', data)
  }

  async logout(): Promise<void> {
    return $api.post('/api/auth/logout')
  }

  async refresh(): Promise<AxiosResponse<IAuthResponseData>> {
    const response = await axios.get<IAuthResponseData>(
      `${process.env.NEXT_PUBLIC_CLIENT_API}/refresh`,
      {
        withCredentials: true
      }
    )
    return response
  }
}

export const authService = new AuthService()
