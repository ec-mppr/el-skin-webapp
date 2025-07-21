import { get, Endpoint } from './api';
import { IProduct } from '../types/IProduct';

async function getProducts(): Promise<IProduct[]> {
  const response = await get<IProduct[]>(Endpoint.PRODUCTS);
  return response.data;
}

async function getDetailsProduct(productId: string): Promise<IProduct | undefined> {
  const response = await get<IProduct[]>(Endpoint.PRODUCTS);
  const productsList = response.data;
  const product = productsList.find((product) => product.id = productId);
  return product;
}

export { getProducts, getDetailsProduct };