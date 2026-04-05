export type Slide = {
  id: number
  image: string
  title: string
}

export const slides: Slide[] = [
  {
    id: 1,
    image: '/images/banners/HeroBanner/Banner1.jpeg',
    title: 'ПРОДАЕМ МЕБЕЛЬ, КОТОРАЯ СЛУЖИТ ВАМ'
  },
  {
    id: 2,
    image: '/images/banners/HeroBanner/Banner2.webp',
    title: 'ПРОДАЕМ МЕБЕЛЬ, КОТОРАЯ СЛУЖИТ ВАМ'
  }
  // добавь остальные слайды при необходимости
] as const
