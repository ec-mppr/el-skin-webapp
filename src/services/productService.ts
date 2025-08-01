import { get, Endpoint } from './api';
import { IProduct } from '../types/IProduct';

const productService = {
  async getProducts(): Promise<IProduct[]> {
    const response = await get<IProduct[]>(Endpoint.PRODUCTS);
    return response.data;
  }
};

export default productService;