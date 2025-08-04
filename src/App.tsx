import React from 'react';
import './App.css';
import AppRouter from './routes';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
