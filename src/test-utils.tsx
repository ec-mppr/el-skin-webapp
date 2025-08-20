import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'store';

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
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
