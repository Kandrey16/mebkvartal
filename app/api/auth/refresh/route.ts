import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const cookie = req.headers.get('cookie') || ''

  const deviceId = req.cookies.get('x-device-id')?.value || ''
  const userAgent = req.cookies.get('user-agent')?.value || ''

  if (!cookie) return NextResponse.json({ error: 'Cookie' }, { status: 401 })

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/refresh`, {
    method: 'POST',
    headers: {
      cookie,
      'X-Device-ID': deviceId,
      'User-Agent': userAgent
    }
  })

  const data = await res.json()

  if (!res.ok) return NextResponse.json(data, { status: res.status })

  const response = NextResponse.json({ accessToken: data.accessToken })

  response.cookies.set('refreshToken', data.refreshToken, {
    httpOnly: true,
    secure: false,
    //secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60
  })

  return response
}
