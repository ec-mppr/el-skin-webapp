import React from 'react';
import AppRouter from './routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { store } from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styles/GlobalStyle';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </Provider>
      <GlobalStyle theme={theme} />
    </>
  );
}

export default App;
