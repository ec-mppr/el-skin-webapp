import { get, Endpoint } from './api';
import { IProduct } from '../types/IProduct';

async function getProducts(): Promise<IProduct[]> {
  const response = await get<IProduct[]>(Endpoint.PRODUCTS);
  return response.data;
}

export { getProducts };