import { customRender, screen, act, renderWithRouter } from 'test-utils';
import ProductCard from './ProductCard';
import { IProduct } from 'types/IProduct';
import userEvent from '@testing-library/user-event';

const handleProductClick = jest.fn();

const handleBuyClick = jest.fn();

const firstProduct: IProduct = {
  id: '2',
  name: 'Protetor Solar SPF 50',
  description: 'Protetor solar de alta proteção contra raios UVA/UVB, resistente à água.',
  price: 89.90,
  image: '/prod5.jpg',
  tags: [
    { label: 'rosto', type: 'face' }
  ]
};

const secondProduct: IProduct = {
  id: '5',
  name: 'Bálsamo Labial Hidratante',
  description: 'Bálsamo com manteiga de karité para lábios ressecados e proteção diária.',
  price: 12.75,
  image: '/prod5.jpg',
  tags: [
    { label: 'lábios', type: 'lips' },
    { label: 'hidratação', type: 'hydration' }
  ]
};

test('has product title', async () => {
  customRender(<ProductCard
    product={firstProduct}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick} />);

  expect(screen.getByRole('heading', { name: /Protetor Solar/i })).toBeInTheDocument();
});

test('clicking buy product button triggers a function that receives the product info', async () => {
  const user = userEvent.setup();

  customRender(<ProductCard
    product={firstProduct}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick} />);

  await screen.findByText(/comprar/i);
  await user.click(screen.getByText(/comprar/i));
  expect(handleBuyClick).toBeCalled();
  expect(handleBuyClick).toHaveBeenCalledWith(firstProduct.id, expect.anything());
});