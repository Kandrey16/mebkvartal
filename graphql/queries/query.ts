import { gql } from '@apollo/client'

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProducts {
    products {
      total
      items {
        id
        name
        slug
        price
        description
        productImages {
          id
          url
          position
          isMain
          productId
        }
      }
      facets {
        id
        attribute
        values {
          value
          count
        }
      }
    }
  }
`

export const GET_PRODUCTS_BY_CATEGORY_WITH_PARAMS = gql`
  query GetProducts($category: String) {
    products(category: $category) {
      total
      items {
        id
        name
        slug
        price
        description
        productImages {
          id
          url
          position
          isMain
          productId
        }
      }
      facets {
        id
        attribute
        values {
          value
          count
        }
      }
    }
  }
`

export const GET_PRODUCT_FULL_INFO = gql`
  query GetProduct($slug: String!) {
    product(slug: $slug) {
      name
      slug
      price
      description
      isActive
      availableQuantity
      productImages {
        id
        url
        position
        isMain
      }
      attributes {
        name
        values {
          value
        }
      }
    }
  }
`
