import { apiService } from '@/services/api.service'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  return await apiService.handleAuthRequest(req, {
    method: 'POST',
    path: '/auth/refresh'
  })
}

// import axios from 'axios'
// import { NextRequest, NextResponse } from 'next/server'

// export async function POST(req: NextRequest) {
//   const cookie = req.headers.get('cookie') || ''

//   const deviceId = req.cookies.get('x-device-id')?.value || ''
//   const userAgent = req.cookies.get('user-agent')?.value || ''

//   if (!cookie) return NextResponse.json({ error: 'Cookie' }, { status: 401 })

//   const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/refresh`, {
//     headers: {
//       Cookie: cookie,
//       'X-Device-ID': deviceId,
//       'User-Agent': userAgent
//     },
//     validateStatus: () => true
//   })

//   if (res.status !== 200) return NextResponse.json(res.data, { status: res.status })

//   const response = NextResponse.json({ accessToken: res.data.accessToken })

//   response.cookies.set('refreshToken', res.data.refreshToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     maxAge: 30 * 24 * 60 * 60,
//     path: '/'
//   })

//   return response
// }
