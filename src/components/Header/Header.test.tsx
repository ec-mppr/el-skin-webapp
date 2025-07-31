import { customRender, screen } from 'test-utils';
import Header from './Header';
import userEvent from '@testing-library/user-event';

test('has search box with empty initial value', async () => {
  customRender(<Header/>);
  const searchInput = screen.getByPlaceholderText('O que você está procurando?');
  expect(searchInput).toBeInTheDocument(); 
  expect(searchInput).toHaveValue('');
});

test('search box allows text input', async () => {
  const user = userEvent.setup();
  customRender(<Header/>);
  const searchInput = screen.getByPlaceholderText('O que você está procurando?');
  await user.type(searchInput, 'hidratante');
  expect(searchInput).toHaveValue('hidratante');
});

test('submitting search prints the search term to the console', async () => {
  const user = userEvent.setup();
  const consoleSpy = jest.spyOn(console, 'log');
  customRender(<Header/>);
  const searchInput = screen.getByPlaceholderText('O que você está procurando?');
  const searchButton = screen.getByTestId('search-button');
  const searchTerm = 'hidratante';
  const typing = user.type(searchInput, searchTerm);
  const clickingButton = user.click(searchButton);
  Promise.all([typing, clickingButton]).then(() => {
    expect(consoleSpy).toHaveBeenCalledWith(`Você pesquisou por: ${searchTerm}`);
  });
});

test('clicking the cart button shows cart modal', async () => {
  const user = userEvent.setup();
  customRender(<Header />);
  const cartButton = screen.getByTestId('cart-button');
  await user.click(cartButton);
  const carrinho = await screen.findByRole('heading', {name: /carrinho/i});
  expect(carrinho).toBeInTheDocument();
});