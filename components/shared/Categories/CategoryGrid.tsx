import { categories } from '@/data/Categories'
import { CategoryCard } from '../Cards/CategoryCard'

export function CategoryGrid() {
  return (
    //TODO
    <section className="relative w-full py-20">
      <h2 className="text-4xl md:text-5xl font-semibold py-6">Популярные категории</h2>

      <div
        className="
          grid 
          grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          gap-4
          auto-rows-[240px]
          md:auto-rows-[300px]
        "
      >
        {categories.map(category => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  )
}
