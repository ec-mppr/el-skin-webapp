import './About.css';
import Img1 from '../../assets/about_img_1.png';
import Img2 from '../../assets/about_img_2.png';
import ImageCover from '../../assets/about_img_cover.jpg';
import IconFaleConosco from '../../assets/icon_fale_conosco.svg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className="about-container">
        <section className='column-1'>
          <h2 className='about-title'>Sobre a AL SKIN</h2>
          <div>
            <p>QUEM SOMOS
              <br>
              </br>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div>
            <p>POR QUE EXISTIMOS?
              <br>
              </br>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  </p>
          </div>
          <div>
            <p>O QUE A GENTE FAZ?
              <br>
              </br>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.. </p>
          </div>

          <img src={Img1} alt='Conta-gotas'></img>
        </section>
        <section className='column-2'>
          <img src={Img2} alt='Hidratante'></img>
          <div>
            <p className="about-subtitulo">VAMOS CONVERSAR?
              <br>
              </br>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem. 
            </p>
          </div>
          
          <div className='button-fale-conosco-container'>
            <Link to={'/contact'} className='link-fale-conosco'>
              <button className='button-fale-conosco'>
                <img src={IconFaleConosco} alt='Fale conosco' className='icon-fale-conosco'></img>
                <p>Fale conosco</p>
              </button>
            </Link>
          </div>
        </section>
      </div>
      <div className='cover-image-container'>
        <img src={ImageCover} className='cover-image'></img>
      </div>
    </>
  );
}
export default About;