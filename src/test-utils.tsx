import { ReactElement } from 'react';
import { CartProduct, CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router';
import userEvent from '@testing-library/user-event';
import { IProduct } from 'types/IProduct';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <SearchProvider>
          <Router>
            {children}
          </Router>
        </SearchProvider>
      </CartProvider>
    </ThemeProvider>
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
    ...render(ui, { wrapper: Providers }),
  };
};

export * from '@testing-library/react';
export * from '@jest/globals';
export { customRender };
export { renderWithRouter };
