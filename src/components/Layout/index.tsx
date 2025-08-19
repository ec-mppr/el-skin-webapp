import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </Provider>
      <GlobalStyle theme={theme} />
    </>
  );
}

export default Layout;