import { GET_PRODUCT_FULL_INFO, GET_PRODUCTS_BY_CATEGORY } from '@/graphql/queries/query'
import { IGetProductResponce, IGetProductsResponce, IProduct } from '@/types/product.interface'
import { useQuery } from '@apollo/client/react'
import { useMemo } from 'react'

export function useProducts() {
  const { data, loading, error } = useQuery<IGetProductsResponce>(GET_PRODUCTS_BY_CATEGORY)

  const products = useMemo<IProduct[]>(() => {
    if (!data?.products?.items) return []

    return data.products.items.map(product => {
      const productImages = product.productImages || []
      const mainImage = productImages.find(img => img.isMain) || productImages[0] || null

      return {
        ...product,
        productImages,
        mainImage
      }
    })
  }, [data])

  const facets = useMemo(() => {
    if (!data?.products.facets) return []

    return data.products.facets.map(facet => ({
      id: facet.id,
      name: facet.attribute,
      values: facet.values.map(v => ({
        value: v.value,
        count: v.count
      }))
    }))
  }, [data])

  const total = data?.products.total ?? 0

  return {
    products,
    facets,
    total,
    loading,
    error
  }
}

export function useProduct(slug: string) {
  const { data, error, loading } = useQuery<IGetProductResponce>(GET_PRODUCT_FULL_INFO, {
    variables: {
      slug: slug
    }
  })

  const product = useMemo<IProduct | null>(() => {
    if (!data?.product) return null

    const product = data.product

    const productImages = product.productImages || []
    const mainImage = productImages.find(img => img.isMain) || productImages[0] || null

    const attributes =
      product.attributes?.map(attribute => ({
        id: attribute.id,
        name: attribute.name,
        values:
          attribute.values.map(v => ({
            id: v.id,
            slug: v.slug,
            value: v.value
          })) || []
      })) || []

    return {
      ...product,
      productImages,
      mainImage,
      attributes
    }
  }, [data])

  return {
    product,
    error,
    loading
  }
}
