'use client'

import { CarouselControls } from './CarouselControls'
import { CarouselDots } from './CarouselDots'
import { CarouselContent } from './CarouselContent'
import { useCarousel } from '@/hooks/useCarousel'
import { slides } from '@/data/Slides'

export default function Carousel() {
  const { current, prev, next, goTo } = useCarousel(slides.length)

  return (
    <div className="relative w-full aspect-16/6 pt-4 overflow-hidden">
      <CarouselContent
        slides={slides}
        current={current}
      />
      <CarouselControls
        prev={prev}
        next={next}
      />
      <CarouselDots
        count={slides.length}
        goTo={goTo}
        current={current}
      />
    </div>
  )
}
