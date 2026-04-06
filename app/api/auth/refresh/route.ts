import { apiService } from '@/services/api.service'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  return await apiService.handleAuthRequest(req, {
    method: 'POST',
    path: '/auth/refresh'
  })
}