import { apiService } from '@/services/api.service'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  return await apiService.handleAuthRequest(req, {
    method: 'POST',
    path: '/auth/signIn',
    data: body
  })
}

// import axios from 'axios'
// import { NextRequest, NextResponse, userAgent } from 'next/server'

// export async function POST(req: NextRequest) {
//   const body = await req.json()

//   const deviceId = req.cookies.get('x-device-id')?.value || ''
//   const agent = userAgent(req)

//   const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signIn`, body, {
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Device-ID': deviceId,
//       'User-Agent': agent.ua
//     },
//     validateStatus: () => true
//   })

//   if (res.status !== 200) return NextResponse.json(res.data, { status: res.status })

//   const response = NextResponse.json({ accessToken: res.data.accessToken })

//   response.cookies.set('refreshToken', res.data.refreshToken, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     path: '/',
//     maxAge: 30 * 24 * 60 * 60
//   })

//   return response
// }
