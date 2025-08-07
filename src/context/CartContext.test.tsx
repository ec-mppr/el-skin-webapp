import { customRender, render, screen, waitFor } from 'test-utils';
import { CartProvider, useCartContext } from './CartContext';
import Home from 'pages/Home/Home';
import userEvent from '@testing-library/user-event';
import Header from 'components/Header/Header';
import ProductGrid from 'components/ProductGrid/ProductGrid';

describe('testing CartContext', () => {
  const TestContainer = () => (
    <div>
      <Header />
      <ProductGrid />
    </div>
  );

  test('is used with empty cart as default', async () => {
    const user = userEvent.setup();
    customRender(<TestContainer />);

    const cartButton = screen.getByTestId('cart-button');
    await user.click(cartButton);
    await waitFor(() => {
      expect(screen.findByText(/Seu carrinho está vazio./i));
    });
  });

  test('updates cart quantity when a new product is added', async () => {
    const user = userEvent.setup();
    customRender(<TestContainer />);
    const buyButtons = await screen.findAllByRole('button', { name: /^comprar$/i });
    const buyButton = buyButtons[0];
    await user.click(buyButton);
    await waitFor(() => {
      expect(screen.getByTestId('cart-button-quantity')).toHaveTextContent(/1/);
    });

  });
});



