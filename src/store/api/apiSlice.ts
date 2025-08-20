import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICarouselItem } from 'components/Carousel/Carousel';
import { BASE_URL, Endpoint } from 'services/api';
import { IProduct } from 'types/IProduct';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    timeout: 5000,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => Endpoint.PRODUCTS,
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => `${Endpoint.PRODUCTS}/${id}`,
    }),
    getCarouselItems: builder.query<ICarouselItem[], void>({
      query: () => Endpoint.CAROUSEL,
    }),
  })
});

export const {
  useGetProductsQuery,
  useGetCarouselItemsQuery,
  useGetProductByIdQuery
} = apiSlice;

