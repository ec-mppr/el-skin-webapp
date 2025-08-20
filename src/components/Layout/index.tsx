'use client';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Provider } from 'react-redux';
import { store } from 'store';
import { GlobalStyle } from 'styles/GlobalStyle';

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Provider>
      <GlobalStyle />
    </>
  );
}

export default Layout;