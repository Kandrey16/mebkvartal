import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  const deviceId = request.cookies.get('x-device-id')

  if (!deviceId) {
    response.cookies.set('x-device-id', crypto.randomUUID(), {
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 365,
      path: '/'
    })
  }

  return response
}
