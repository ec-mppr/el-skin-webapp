import { get, Endpoint } from './api';
import { IProduct } from '../types/IProduct';

const productService = {
  async getProducts(): Promise<IProduct[]> {
    const response = await get<IProduct[]>(Endpoint.PRODUCTS);
    return response.data;
  },

  async getProductById(id: string): Promise<IProduct> {
    await get<IProduct[]>(Endpoint.PRODUCTS).then((products) => {
      const product = products.data.find((product) => product.id == id);
      return product ?? {} as IProduct;
    });
    return {} as IProduct;
  }
};

export default productService;