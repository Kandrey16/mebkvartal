import $api from '@/lib/apiClient'
import { IBrand } from '@/types/brand.interface'
import { AxiosResponse } from 'axios'

class ProductService {
  async fetchBrands(): Promise<AxiosResponse<IBrand[]>> {
    return $api.get<IBrand[]>('/auth/brand')
  }
}

export const productService = new ProductService()
