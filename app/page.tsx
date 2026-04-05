import Carousel from '@/components/shared/Banners/Carousel/Carousel'
import { CategoryGrid } from '@/components/shared/Categories/CategoryGrid'
import { ProductList } from '@/components/features/ProductList'

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <Carousel />
      <CategoryGrid />
      <ProductList />
    </div>
  )
}
