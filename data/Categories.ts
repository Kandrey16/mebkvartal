export type Category = {
  id: number
  title: string
  href: string
  image: string
  colSpan?: number
  rowSpan?: number
}

export const categories: Category[] = [
  {
    id: 1,
    title: 'Кресла',
    href: '/catalog/chairs',
    image: '/images/categories/chair.webp',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 2,
    title: 'Столы',
    href: '/catalog/tables',
    image: '/images/categories/table.webp',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 3,
    title: 'Кровати',
    href: '/catalog/beds',
    image: '/images/categories/bed.webp',
    colSpan: 2,
    rowSpan: 1
  },
  {
    id: 4,
    title: 'Стулья',
    href: '/catalog/chairs-small',
    image: '/images/categories/kresla.jpeg',
    colSpan: 1,
    rowSpan: 1
  },
  {
    id: 5,
    title: 'Диваны',
    href: '/catalog/sofas',
    image: '/images/categories/sofa.jpg',
    colSpan: 2,
    rowSpan: 1
  },
  {
    id: 6,
    title: 'Тумбы',
    href: '/catalog/cabinets',
    image: '/images/categories/pedestal.webp',
    colSpan: 1,
    rowSpan: 1
  }
]
