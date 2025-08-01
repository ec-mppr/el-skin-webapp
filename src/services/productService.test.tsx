import { productsMock } from 'mocks/productsMock';
import { IProduct } from 'types/IProduct';
import productService from './productService';
import { customRender } from 'test-utils';
import ProductGrid from 'components/ProductGrid/ProductGrid';

describe('testing productService', () => {
  jest.mock('./productService', () => ({
    getProducts: jest.fn()
  }));

  test('getProducts is called when rendering ProductGrid', () => {
    const getProductsSpy = jest.spyOn(productService, 'getProducts');
    customRender(<ProductGrid />);

    expect(getProductsSpy).toHaveBeenCalled();
  });
});