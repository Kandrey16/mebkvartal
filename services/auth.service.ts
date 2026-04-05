class AuthService {
  async signIn(data: { email: string; password: string }) {
    const res = await fetch('/api/auth/signIn', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (!res.ok) throw new Error('Неверный email или пароль')

    return res.json()
  }

  async refresh() {
    const res = await fetch('/api/auth/refresh', {
      method: 'POST',
      credentials: 'include',
    })

    if (!res.ok) {
      throw new Error('Ошибка обновления')
    }

    return res.json()
  }

  async logout() {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    })

    if (!res.ok) throw new Error('Ошибка выхода')

    return res.json()
  }
}

export const authService = new AuthService()
