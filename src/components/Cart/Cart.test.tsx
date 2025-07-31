import userEvent from '@testing-library/user-event';
import Header from 'components/Header/Header';
import ProductGrid from 'components/ProductGrid/ProductGrid';
import { customRender, screen, waitFor } from 'test-utils';

describe('testing Cart', () => {
  const TestContainer = () => (
    <div>
      <Header />
      <ProductGrid />
    </div>
  );

  test('is shown when cart icon is clicked in header', async () => {
    const user = userEvent.setup();
    customRender(<TestContainer />);
    const cartButton = await screen.findByTestId('cart-button');
    await user.click(cartButton);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /carrinho/i })).toBeInTheDocument();
    });
  });

  test('is hidden when close icon is clicked', async () => {
    const user = userEvent.setup();
    customRender(<TestContainer />);

    const cartButton = await screen.findByTestId('cart-button');
    await user.click(cartButton);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /carrinho/i })).toBeInTheDocument();
    });

    const cartCloseButton = await screen.findByTestId('cart-close');
    await user.click(cartCloseButton);

    await waitFor(() => {
      expect(screen.queryByRole('heading', { name: /carrinho/i })).not.toBeInTheDocument();
    });
  });

  test('decreases product quantity when minus button is clicked', async () => {
    const user = userEvent.setup();
    customRender(<TestContainer />);

    const buyButtons = await screen.findAllByRole('button', { name: /^comprar$/i });
    const buyButton = buyButtons[0];
    await user.click(buyButton);
    await user.click(buyButton);

    const cartButton = await screen.findByTestId('cart-button');
    await user.click(cartButton);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /carrinho/i })).toBeInTheDocument();
    });

    const decreaseQuantityButton = await screen.findByTestId('decrease-quantity-button');

    await user.click(decreaseQuantityButton);

    await waitFor(() => {
      const quantityNumber = screen.getByTestId('quantity-number');
      expect(quantityNumber).toHaveValue('1');
    });
  });

  test('increases product quantity when plus button is clicked', async () => {
    const user = userEvent.setup();
    customRender(<TestContainer />);

    const buyButtons = await screen.findAllByRole('button', { name: /^comprar$/i });
    const buyButton = buyButtons[0];
    await user.click(buyButton);

    const cartButton = await screen.findByTestId('cart-button');
    await user.click(cartButton);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /carrinho/i })).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByTestId('cart-item-title')).toBeInTheDocument();
    });

    const increaseQuantityButton = await screen.findByTestId('increase-quantity-button');

    await user.click(increaseQuantityButton);

    await waitFor(() => {
      const quantityNumber = screen.getByTestId('quantity-number');
      expect(quantityNumber).toHaveValue('2');
    });
  });
});