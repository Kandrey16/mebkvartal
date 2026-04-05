import { NextRequest, NextResponse, userAgent } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const deviceId = req.cookies.get('x-device-id')?.value || ''
  const agent = userAgent(req)

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signIn`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Device-ID': deviceId,
      'User-Agent': agent.ua
    },
    body: JSON.stringify(body)
  })

  const data = await res.json()

  if (!res.ok) return NextResponse.json(data, { status: res.status })

  const response = NextResponse.json({ accessToken: data.accessToken })

  response.cookies.set('refreshToken', data.refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60
  })

  return response
}
