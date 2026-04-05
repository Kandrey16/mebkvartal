'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth.store'

export default function ActivateInfoPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const [status, setStatus] = useState<'waiting' | 'success'>('waiting')

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let interval: NodeJS.Timeout

    const checkActivation = async () => {
      try {
        const res = await fetch('/api/auth/refresh', {
          method: 'POST',
          credentials: 'include'
        })
        if (!res.ok) return

        const data = await res.json()

        if (data.user?.isActivated) {
          setStatus('success') // обновляем глобальный стор
          login(data.accessToken, data.user) // даём пользователю увидеть "Успешно"

          setTimeout(() => {
            router.push('/')
          }, 1500)
          clearInterval(interval)
        }
      } catch (e) {
        console.error('Ошибка проверки активации', e)
      }
    }
    interval = setInterval(checkActivation, 10000)
    return () => clearInterval(interval)
  }, [login, router])

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      {status === 'waiting' && (
        <>
          <h1 className="text-2xl font-semibold"> Подтвердите вашу почту </h1>
          <p className="text-gray-500">
            Мы отправили письмо. После подтверждения вы будете автоматически перенаправлены.
          </p>
        </>
      )}{' '}
      {status === 'success' && (
        <h1 className="text-2xl font-semibold text-green-600"> Успешно! Перенаправление... </h1>
      )}
    </div>
  )
}
