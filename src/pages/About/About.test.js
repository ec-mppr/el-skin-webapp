import { render, screen, expect, jest, test } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import About from './About';

test('loads and displays page title', async () => {
  render(<About />);

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent('Sobre a AL SKIN');
});
