'use client'

import { useProduct } from '@/hooks/useProducts'
import ProductGallery from './ProductGallery'
import ProductTabs from './ProductTabs'
import ProductDetails from './ProductDetails'

type Props = {
  slug: string
}

export default function ProductData({ slug }: Props) {
  const { product, loading, error } = useProduct(slug)

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error.message}</div>
  if (!product) return <div>Товар не найден</div>

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery data={product} />
        <ProductDetails data={product} />
      </div>
      <ProductTabs data={product} />
    </div>
  )
}
