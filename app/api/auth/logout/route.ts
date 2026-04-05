import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const cookieHeader = req.headers.get('cookie') || ''
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      cookie: cookieHeader
    },
  })

  const response = new NextResponse(await res.text(), {
    status: res.status
  })

  const setCookie = res.headers.get('set-cookie')
  if (setCookie) {
    response.headers.set('set-cookie', setCookie)
  }

  return response
}
