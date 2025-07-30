import { render, test, screen, fireEvent, act } from 'test-utils';
import ProductGrid from './ProductGrid';
import { productsMock } from 'mocks/productsMock';
import { SearchContext } from 'context/SearchContext';
import userEvent from '@testing-library/user-event';

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

test('triggers a function on product click', async () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);
  render(<ProductGrid />);
  const productsList = await screen.findAllByTestId('product-card');
  const firstProduct = productsList[0];
  const user = userEvent.setup();
  user.click(firstProduct).then(() => {
    expect(consoleSpy).toHaveBeenCalledWith('Produto clicado: 1');
  });
});