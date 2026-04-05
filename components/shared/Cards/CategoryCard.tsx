'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Category } from '@/data/Categories'

type CategoryCardProps = {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={cn(
        'group relative block h-full w-full overflow-hidden rounded-2xl',
        'transition-transform duration-300 ease-out',
        'hover:scale-[1.02]'
      )}
      style={{
        gridColumn: `span ${category.colSpan || 1}`,
        gridRow: `span ${category.rowSpan || 1}`
      }}
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />

      {/* Title */}
      <div className="absolute bottom-4 left-4 z-10">
        <h3 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
          {category.title}
        </h3>
      </div>
    </Link>
  )
}
