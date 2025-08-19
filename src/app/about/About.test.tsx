import { customRender, screen, jest, test, act, renderWithRouter } from 'test-utils';
import { userEvent } from '@testing-library/user-event';
import About from './page';

test('loads and displays page title', async () => {
  customRender(<About />);

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent('Sobre a AL SKIN');
});

test('has a button that navigates to contact page', async () => {
  const render = renderWithRouter(<About />, { route: '/about' });

  const faleConoscoButton = screen.getByRole('link', {
    name: /Fale conosco/i
  });

  expect(faleConoscoButton).toBeVisible();

  expect(faleConoscoButton).toHaveTextContent('Fale conosco');

  render.user.click(screen.getByRole('link', {
    name: /Fale conosco/i
  })).then(() => {
    expect(screen.getByText(/Ajuda - FAQ/i)).toBeInTheDocument();
  });
});

test('loads and displays main text', async () => {
  customRender(<About />);

  expect(screen.getByText(/QUEM SOMOS/i)).toBeInTheDocument();
});

test('has images with alt text', async () => {
  customRender(<About />);
  expect(screen.getByAltText('Conta-gotas')).toBeInTheDocument();
  expect(screen.getByAltText('Hidratante')).toBeInTheDocument();
});