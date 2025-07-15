import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <Header />
      <div className='container-not-found'>
        <div className='title-not-found'>
          <p>Página não encontrada
          </p></div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;