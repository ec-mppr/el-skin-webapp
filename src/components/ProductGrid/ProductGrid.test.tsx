import { render, test, screen, fireEvent, act, waitFor } from 'test-utils';
import ProductGrid from './ProductGrid';
import { productsMock } from 'mocks/productsMock';
import { SearchContext } from 'context/SearchContext';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import React from 'react';

test('renders full list of products', async () => {
  render(<ProductGrid />);
  const productsList = await screen.findAllByTestId('product-card');
  expect(productsList).toHaveLength(productsMock.length);
});

test('products are filtered by search term', async () => {
  render(
    <SearchContext value={{ search: 'hidratante', setSearch: () => null }}>
      <ProductGrid />
    </SearchContext>
  );
  const productsList = await screen.findAllByText(/hidratante/i);
  expect(productsList).toHaveLength(3);
});

test('message is shown if no product is found with search term', async () => {
  render(
    <SearchContext value={{ search: 'olhos', setSearch: () => null }}>
      <ProductGrid />
    </SearchContext>
  );

  expect(screen.queryAllByText(/olhos/i)).toHaveLength(0);
  expect(screen.getByText(/nenhum produto encontrado/i)).toBeInTheDocument();
});

test('triggers a function on product click', async () => {
  const consoleSpy = jest.spyOn(console, 'log');
  render(<ProductGrid />);
  const productsList = await screen.findAllByTestId('product-card');
  const firstProduct = productsList[0];
  const user = userEvent.setup();
  await user.click(firstProduct);
  await waitFor(() => {
    (expect(consoleSpy).toHaveBeenCalledWith('Produto clicado: 1'));
  });
});