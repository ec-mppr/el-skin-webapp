import { render, test, screen } from 'test-utils';
import ProductGrid from './ProductGrid';
import { productsMock } from 'mocks/productsMock';

test('renders full list of products', async () => {
  render(<ProductGrid />);
  const productElements = await screen.findAllByRole('heading', { name: /Creme Hidratante Facial|Protetor Solar SPF 50|Máscara de Argila Verde|Sérum Antirrugas|Bálsamo Labial Hidratante|Esfoliante Facial|Tônico Revitalizante|Óleo Corporal Hidratante/i });
  screen.debug(productElements);
  expect(productElements).toHaveLength(productsMock.length);
});