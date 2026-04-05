'use client'

import clsx from 'clsx'
import { Heart, RussianRuble, ShoppingCart } from 'lucide-react'
import { Button } from '../../ui/button'
import { IProduct } from '@/types/product.interface'

type Props = {
  data: IProduct
}

export default function ProductDetails({ data }: Props) {
  const isActive = data?.isActive ? true : false

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{data?.name}</h1>
        <p className="text-gray-500 mt-1">ART12345</p>
      </div>
      {/* Рейтинг */}
      {/*TODO*/}

      <div className="flex items-center gap-3">
        <div className="flex text-yellow-400">★★★★★</div>
        <span className="font-medium">4.9</span>
        <span className="text-gray-500">(156)</span>
      </div>

      {/* Наличие */}
      <div
        className={clsx(
          'inline-block  px-4 py-1 rounded-full text-sm font-medium uppercase',
          isActive ? 'bg-green-100 text-green-700' : 'bg-red-500 text-white'
        )}
      >
        {isActive ? 'В начичии' : 'Отсутствует'}
      </div>
      {/* Цена */}
      <div className="flex items-end gap-3">
        <span className="flex flex-row items-center text-4xl font-semibold">
          {data?.price} <RussianRuble />
        </span>
        <span className="flex flex-row items-center text-xl text-gray-400 line-through">
          10999 <RussianRuble />
        </span>
        <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded">−35%</span>
      </div>
      <p className="text-gray-600">ДОСТАВИМ 30 МАРТА</p>
      {/* Кнопки */}
      <div className="flex gap-4 pt-4">
        <Button
          size="lg"
          className="flex-1 py-6 gap-2 text-xl font-medium"
        >
          <ShoppingCart /> В КОРЗИНУ
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="py-6 aspect-square"
        >
          <Heart className=" hover:fill-red-600 hover:text-red-600 transition-colors" />
        </Button>
      </div>
      <Button
        variant="outline"
        size="lg"
        className="w-full py-4 rounded-xl text-sm"
      >
        ПЕРЕЙТИ К ОПИСАНИЮ
      </Button>
    </div>
  )
}
