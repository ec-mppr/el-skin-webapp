import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './NotFound.css';
import ImgCover from '../../assets/img_2_carousel.png';

function NotFound() {
  return (
    <>
      <Header />
      <div className='container-not-found'>
        <div className='title-not-found'>
          <p>Página não encontrada
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;