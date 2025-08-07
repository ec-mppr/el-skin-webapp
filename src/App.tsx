import React from 'react';
import AppRouter from './routes';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from 'styles/GlobalStyle';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <SearchProvider>
            <AppRouter />
          </SearchProvider>
        </CartProvider>
      </ThemeProvider>
      <GlobalStyle theme={theme} />
    </>
  );
}

export default App;
