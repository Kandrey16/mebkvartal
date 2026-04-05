type CarouselDotsProps = {
  count: number
  goTo: (index: number) => void
  current: number
}

export function CarouselDots({ count, goTo, current }: CarouselDotsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => goTo(index)}
          className={`w-8 h-1 transition-all ${
            index === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
          }`}
        />
      ))}
    </div>
  )
}
