import { apiService } from '@/services/api.service'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  return await apiService.handleAuthRequest(req, {
    method: 'POST',
    path: '/auth/logout'
  })
}

// import axios from 'axios'
// import { NextRequest, NextResponse } from 'next/server'
// export async function POST(req: NextRequest) {
//   const cookieHeader = req.headers.get('cookie') || ''

//   const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/logout`, {
//     headers: {
//       'Content-Type': 'application/json',
//       cookie: cookieHeader
//     },
//     validateStatus: () => true
//   })

//   const response = new NextResponse(res.data(), {
//     status: res.status
//   })

//   const setCookie = res.headers['set-cookie']
//   if (setCookie) {
//     response.headers.set('set-cookie', setCookie.join(','))
//   }

//   return response
// }
