import { customRender, test, screen, fireEvent, act, waitFor, render } from 'test-utils';
import ProductGrid from './ProductGrid';
import { productsMock } from 'mocks/productsMock';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import Header from 'components/Header/Header';

describe('testing Cart', () => {
  const TestContainer = () => (
    <div>
      <Header />
      <ProductGrid />
    </div>
  );

  test('renders full list of products', async () => {
    customRender(<TestContainer />);
    const productsList = await screen.findAllByTestId('product-card');
    expect(productsList).toHaveLength(productsMock.length);
  });

  test('products are filtered by search term', async () => {
    customRender(<TestContainer />);
    const productsList = await screen.findAllByText(/hidratante/i);
    expect(productsList).toHaveLength(3);
  });

  test('triggers a function on product click', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const user = userEvent.setup();
    customRender(<TestContainer />);
    const productsList = await screen.findAllByTestId('product-card');
    const firstProduct = productsList[0];
    await user.click(firstProduct);
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Produto clicado: 1');
    });
  });

  test('message is shown if no product is found with search term', async () => {
    const user = userEvent.setup();
    customRender(<TestContainer />);
    user.type(screen.getByTestId('search-box'), 'olhos');
    await waitFor(() => {
      expect(screen.queryAllByText(/olhos/i)).toHaveLength(0);
      expect(screen.getByText(/nenhum produto encontrado/i)).toBeInTheDocument();
      screen.debug();
    });
  });
});