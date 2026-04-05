import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get('refreshToken')?.value

  if (!refreshToken) return NextResponse.json({ error: 'No refresh token' }, { status: 401 })

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken })
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
