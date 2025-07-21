import axios, { AxiosResponse } from 'axios';

export const BASE_URL = 'http://localhost:3001';

enum Endpoint {
    CAROUSEL = '/carousel',
    PRODUCTS = '/products'
}

async function get<T>(endpoint: Endpoint): Promise<AxiosResponse<T>> {
  return axios.get(BASE_URL + endpoint);
}

export { get, Endpoint };