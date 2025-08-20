import { renderHook } from '@testing-library/react';
import { useCart } from '../hooks/useCart';
import { act } from 'react';
import { TestProviders } from 'test-utils';
import { productsMock } from 'mocks/productsMock';

describe('testing useCart', () => {
  const firstItem = productsMock[0];
  const secondItem = productsMock[1];

  it('starts with empty cart as initial state', () => {
    const { result } = renderHook(() => useCart(), { wrapper: TestProviders });

    expect(result.current.items).toEqual([]);
    expect(result.current.getTotalItems()).toBe(0);
    expect(result.current.totalPrice).toBe(0);
  });

  it('adds a product to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: TestProviders });

    act(() => {
      result.current.addItem(firstItem);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0]).toEqual({
      ...firstItem,
      quantity: 1
    });
  });

  it('updates the total price when a new item is added', () => {
    const { result } = renderHook(() => useCart(), { wrapper: TestProviders });

    act(() => {
      result.current.addItem(secondItem);
    });

    expect(result.current.items).toHaveLength(2);
    expect(result.current.totalPrice).toBe(firstItem.price + secondItem.price);
  });

  it('removes a product from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: TestProviders });

    act(() => {
      result.current.removeItem(secondItem.id);
    });

    expect(result.current.items).toHaveLength(1);
    expect(result.current.items[0]).toEqual({
      ...firstItem,
      quantity: 1
    });
  });

  it('clears cart, removing all items', () => {
    const { result } = renderHook(() => useCart(), { wrapper: TestProviders });

    act(() => {
      result.current.clearCart();
    });

    expect(result.current.items).toEqual([]);
  });
});
