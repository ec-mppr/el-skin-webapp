import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'store';

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: TestProviders, ...options });

const renderWithRouter = (
  ui: ReactElement,
  { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: TestProviders }),
  };
};

export * from '@testing-library/react';
export * from '@jest/globals';
export { customRender, renderWithRouter, TestProviders };
