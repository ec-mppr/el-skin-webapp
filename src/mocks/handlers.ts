import { http, HttpResponse } from 'msw';
import { carouselMock } from './carouselMock';
import { productsMock } from './productsMock';

export const handlers = [
  http.get('http://localhost:3001/carousel', () => {
    return HttpResponse.json(carouselMock);
  }),
  http.get('http://localhost:3001/products', () => {
    return HttpResponse.json(productsMock);
  }),
];