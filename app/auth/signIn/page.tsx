'use client'

import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LoginFormData, loginSchema } from '@/schema/login.schema'
import { authService } from '@/services/auth.service'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/store/auth.store'
import Link from 'next/link'

export default function SignInPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await authService.signIn(data)
      login(res.accessToken, res.user)
      router.push('/')
    } catch {
      setError('root', {
        message: 'Неверный логин или пароль'
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 space-y-4"
    >
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border"
        required
        {...register('email')}
      />
      {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
      <input
        type="password"
        placeholder="Пароль"
        className="w-full p-3 border"
        required
        {...register('password')}
      />
      {errors.password && <p className="text-red-500">{errors.password?.message}</p>}

      {errors.root && <p className="text-red-500">{errors.root?.message}</p>}

      <Button
        type="submit"
        size="lg"
        className="w-full h-12 text-lg uppercase"
      >
        Войти
      </Button>
      <p>
        Нет аккаунта?{' '}
        <Link href="/auth/signUp">
          <span>Регистрация</span>
        </Link>
      </p>
    </form>
  )
}
