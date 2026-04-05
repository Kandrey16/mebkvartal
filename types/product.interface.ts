import { IAttribute } from './attribute.interface'

export interface IProduct {
  id: string
  name: string
  slug: string
  price: number
  description: string
  availableQuantity: number
  isActive: boolean
  brandId: number
  categoryId: number

  productImages?: IProductImage[]
  mainImage?: IProductImage | null
  attributes?: IAttribute[]
}

export interface IProductImage {
  id: string
  url: string
  position: number
  isMain: boolean
  productId: string
}

export interface IFacetValue {
  value: string
  count: number
}

export interface IFacet {
  id: number
  attribute: string
  values: IFacetValue[]
}

export interface IGetProductsResponce {
  products: {
    total: number
    items: IProduct[]
    facets: IFacet[]
  }
}

export interface IGetProductResponce {
  product: IProduct
}
