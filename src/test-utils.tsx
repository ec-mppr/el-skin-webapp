import { ReactElement } from 'react';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router';

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          {children}
        </Router>
      </SearchProvider>
    </CartProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: Providers, ...options});

export * from '@testing-library/react';
export * from '@jest/globals';
export { customRender as render };
