'use client'

import { productService } from '@/services/product.service'
import { ProductCard } from '../shared/Cards/ProductCard'
import { useProducts } from '@/hooks/useProducts'

export function ProductList() {
  const { products } = useProducts()
  const brands = productService.fetchBrands()
  return (
    <section className="flex flex-col py-20">
      <h2 className="text-4xl md:text-5xl font-semibold py-6">Новинки</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      <div>
        <p>Бренды</p>
        {brands.map(b => {
          ;<p key={b.id}>b.name</p>
        })}
      </div>
    </section>
  )
}
