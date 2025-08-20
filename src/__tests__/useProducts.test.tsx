import { renderHook, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import { TestProviders } from 'test-utils';
import { productsMock } from 'mocks/productsMock';
import { useProducts } from 'hooks/useProducts';

describe('testing useProducts', () => {
  it('starts with empty product list as initial state', () => {
    const { result } = renderHook(() => useProducts(), { wrapper: TestProviders });

    expect(result.current.products).toEqual([]);
  });

  it('loads all products', async () => {
    const { result } = renderHook(() => useProducts(), { wrapper: TestProviders });

    result.current.loadProducts();

    await waitFor(() => {
      expect(result.current.products).toHaveLength(8);
    });

  });

  it('gets product by id', async () => {
    const { result } = renderHook(() => useProducts(), { wrapper: TestProviders });

    const testId = productsMock[0].id;

    const product = result.current.getProductById(testId);

    await waitFor(() => {
      expect(product).toBeTruthy;
      expect(product?.id).toEqual(testId);
    });
  });
});
