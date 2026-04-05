import { IApiRequestData } from '@/types/api.interface'
import axios, { AxiosRequestConfig, Method } from 'axios'
import { NextRequest, NextResponse, userAgent } from 'next/server'

interface IApiRequestOptions {
  method: Method
  path: string
  data?: IApiRequestData
  headers?: Record<string, string>
  req: NextRequest
}

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

class ApiService {
  private async sendApiRequest({ method, path, data, headers = {}, req }: IApiRequestOptions) {
    console.log('🔵 [sendApiRequest] path:', path)
    console.log('🔵 [sendApiRequest] data:', JSON.stringify(data, null, 2))

    const cookie = req.headers.get('cookie') || ''
    const deviceId = req.cookies.get('x-device-id')?.value || ''
    const agent = userAgent(req)

    console.log('🔵 [sendApiRequest] raw cookie header:', req.headers.get('cookie'));

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers
    }
    if (cookie) requestHeaders.Cookie = cookie
    if (deviceId) requestHeaders['X-Device-ID'] = deviceId
    if (agent.ua) requestHeaders['User-Agent'] = agent.ua

    console.log('🔵 [sendApiRequest] headers:', requestHeaders)
    console.log('REFRESH TOKEN (parsed):', req.cookies.get('refreshToken')?.value)
    
    const config: AxiosRequestConfig = {
      method,
      url: `${API_ENDPOINT}${path}`,
      headers: requestHeaders,
      validateStatus: () => true
    }
    if (data) config.data = data

    console.log('🔵 [sendApiRequest] final config:', {
      url: config.url,
      method: config.method,
      data: config.data
    })

    const response = await axios(config)
    console.log('🟢 [sendApiRequest] response status:', response.status)
    console.log('🟢 [sendApiRequest] response data:', response.data)
    return response
  }

  private setRefreshTokenCookie(response: NextResponse, refreshToken: string) {
    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 30 * 24 * 60 * 60
    })
  }

  async handleAuthRequest(
    req: NextRequest,
    options: {
      method: Method
      path: string
      data?: IApiRequestData
      successStatus?: number
      includeUserInResponse?: boolean
    }
  ) {
    const { method, path, data, successStatus = 200, includeUserInResponse = false } = options
    console.log('🟡 [handleAuthRequest] options:', options)

    const response = await this.sendApiRequest({ method, path, data, req })

    if (response.status !== successStatus) {
      return NextResponse.json(response.data, { status: response.status })
    }

    // Формируем тело ответа
    const responseBody: Record<string, any> = {}
    if (response.data.accessToken) responseBody.accessToken = response.data.accessToken
    if (includeUserInResponse && response.data.user) responseBody.user = response.data.user

    const nextRes = NextResponse.json(responseBody)

    // Устанавливаем refreshToken, если бэкенд его отдал
    if (response.data.refreshToken) {
      this.setRefreshTokenCookie(nextRes, response.data.refreshToken)
    }

    // Специальная обработка для logout: пробрасываем set-cookie от бэкенда (если нужно)
    if (path === '/auth/logout' && response.headers['set-cookie']) {
      const setCookie = response.headers['set-cookie']
      nextRes.headers.set('set-cookie', setCookie.join(','))
    }

    return nextRes
  }
}

export const apiService = new ApiService()
