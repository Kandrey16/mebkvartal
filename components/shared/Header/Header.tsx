import Profile from '@/components/features/Header/Profile'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Heart, Search, ShoppingCart, TextAlignStart } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  
  return (
    <header className="border-b w-full border-b-gray-300 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Верхняя строка */}
        <div className="flex justify-between items-center py-3 text-sm border-b border-b-gray-300">
          <nav className="flex gap-8">
            <a
              href="#"
              className="hover:text-purple-600"
            >
              Доставка
            </a>
            <a
              href="#"
              className="hover:text-purple-600"
            >
              О нас
            </a>
            <a
              href="#"
              className="hover:text-purple-600"
            >
              Гарантии
            </a>
            <a
              href="#"
              className="hover:text-purple-600"
            >
              Оплата
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-purple-600"
            >
              <span>☎</span> +7 985 761 96 50
            </a>
          </div>
        </div>

        {/* Основная шапка */}
        <div className="flex items-center justify-between py-6 gap-8">
          <div className="flex flex-row items-center gap-6">
            <Link href="/">
              <h1 className="text-3xl font-semibold">Mebkvartal</h1>
            </Link>

            <Button
              size="lg"
              className="px-6 py-6 text-lg"
            >
              <TextAlignStart className="w-5 h-5" />
              <p>Каталог</p>
            </Button>
          </div>

          <div className="flex-1">
            <div className="relative">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pl-4 pr-10 h-12"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex flex-col items-center hover:text-purple-600"
            >
              <Heart />
              <span className="text-xs">Избранное</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center hover:text-purple-600"
            >
              <ShoppingCart />

              <span className="text-xs">Корзина</span>
            </a>
            <Profile />
          </div>
        </div>
      </div>
    </header>
  )
}
