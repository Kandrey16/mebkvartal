import ProductData from '@/components/features/ProductPage/ProductData'

type ProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  return <ProductData slug={slug} />
}
