import { useEffect, useState } from 'react'

export function useCarousel(length: number, delay = 5000) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!length) return

    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % length)
    }, delay)

    return () => clearInterval(timer)
  }, [length, delay])

  const prev = () => setCurrent(c => (c - 1 + length) % length)
  const next = () => setCurrent(c => (c + 1) % length)
  const goTo = (index: number) => setCurrent(index)

  return { current, prev, next, goTo } as const
}
