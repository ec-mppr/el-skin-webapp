import { render, screen, expect, jest, test, act } from '../../test-utils';
import { userEvent } from '@testing-library/user-event';
import About from './About';
import '@testing-library/jest-dom';

test('loads and displays page title', async () => {
  render(<About />);

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent('Sobre a AL SKIN');
});

test('has a button that navigates to contact page', async () => {
  render(<About />);

  const user = userEvent.setup();

  const faleConoscoButton = screen.getByRole('link', {
    name: /Fale conosco/i
  });

  expect(faleConoscoButton).toBeVisible();

  expect(faleConoscoButton).toHaveTextContent('Fale conosco');

  await user.click(screen.getByRole('link', {
    name: /Fale conosco/i
  }));

  expect(screen.getByText(/Ajuda - FAQ/i));
});
