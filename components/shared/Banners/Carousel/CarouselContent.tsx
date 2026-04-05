import { Slide } from '@/data/Slides'
import { CarouselSlide } from './CarouselSlide'

type CarouselContentProps = {
  slides: Slide[]
  current: number
}

export function CarouselContent({ slides, current }: CarouselContentProps) {
  return (
    <div
      className="flex h-full transition-transform duration-700 ease-out"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {slides.map(slide => (
        <CarouselSlide
          key={slide.id}
          slide={slide}
        />
      ))}
    </div>
  )
}
