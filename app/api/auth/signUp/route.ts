import { apiService } from '@/services/api.service'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  return await apiService.handleAuthRequest(req, {
    method: 'POST',
    path: '/auth/signUp',
    data: body,
    includeUserInResponse: true
  })
}