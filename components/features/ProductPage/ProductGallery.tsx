import Image from 'next/image'
import noImage from '@/images/no-image.webp'
import { IProduct } from '@/types/product.interface'

type Props = {
  data: IProduct
}

export default function ProductGallery({ data }: Props) {
  const images = data?.productImages ?? []
  const hasMultipleImages = images.length > 1

  return (
    <div>
      <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={data?.mainImage?.url || noImage}
          alt="Стул Сапелла"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Миниатюры */}
      {hasMultipleImages && (
        <div className="flex gap-4 mt-6">
          {images.map(image => (
            <div
              key={image.id}
              className="relative w-24 h-24 rounded-xl overflow-hidden border-2 hover:border-purple-600 cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.id}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
