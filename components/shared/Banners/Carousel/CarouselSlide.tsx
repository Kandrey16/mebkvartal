import { Button } from '@/components/ui/button'
import { Slide } from '@/data/Slides'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

type CarouselSlideProps = {
  slide: Slide
}

export function CarouselSlide({ slide }: CarouselSlideProps) {
  return (
    <div className="relative w-full h-full shrink-0">
      <p>123</p>
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-xl">
          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
            {slide.title}
          </h2>

          <Button
            size="lg"
            className="mt-8 font-medium px-12 py-6 text-lg flex items-center gap-2 transition"
          >
            Смотреть
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
