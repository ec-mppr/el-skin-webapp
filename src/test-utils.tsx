import { ReactElement } from 'react';
import { CartProduct, CartProvider } from './context/CartContext';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router';
import userEvent from '@testing-library/user-event';
import { IProduct } from 'types/IProduct';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <Router>
        {children}
      </Router>
    </CartProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Providers, ...options });

const renderWithRouter = (
  ui: ReactElement,
  { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

export * from '@testing-library/react';
export * from '@jest/globals';
export { customRender };
export { renderWithRouter };
