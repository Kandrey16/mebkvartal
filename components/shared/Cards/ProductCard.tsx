'use client'

import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import noImage from '@/images/no-image.webp'
import Link from 'next/link'
import { IProduct } from '@/types/product.interface'

export function ProductCard({ product }: { product: IProduct }) {
  const image = product.productImages?.find(img => img.isMain) || product.productImages?.[0]
  const imageUrl = image?.url || noImage

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group rounded-2xl border bg-white overflow-hidden transition-all hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative w-full aspect-4/5 overflow-hidden">
        <Image
          src={imageUrl}
          alt={product.slug}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h3 className="text-lg font-semibold uppercase tracking-wide line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{product.price}$</span>
          </div>

          {/* Cart button */}
          <button className="p-2 rounded-full border hover:bg-primary hover:text-white transition">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </Link>
  )
}
