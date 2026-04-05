import { ChevronLeft, ChevronRight } from 'lucide-react'

type CarouselControlsProps = {
  prev: () => void
  next: () => void
}

export function CarouselControls({ prev, next }: CarouselControlsProps) {
  return (
    <>
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  )
}
