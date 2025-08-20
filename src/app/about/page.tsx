import Link from 'next/link';
import Img1 from '../../assets/about_img_1.png';
import Img2 from '../../assets/about_img_2.png';
import ImageCover from '../../assets/about_img_cover.jpg';
import IconFaleConosco from '../../assets/icon_fale_conosco.svg';
import styles from './About.module.css';
import Layout from 'components/Layout';
import './About.module.css'

function About() {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <section className={styles.sectionColumn}>
            <h2 className={styles.title}>Sobre a AL SKIN</h2>
            <div>
              <p>QUEM SOMOS
                <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <div>
              <p>POR QUE EXISTIMOS?
                <br />
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  </p>
            </div>
            <div>
              <p>O QUE A GENTE FAZ?
                <br />
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.. </p>
            </div>
            <img src={Img1.src} alt='Conta-gotas' />
          </section>
          <section className={styles.sectionColumn}>
            <img src={Img2.src} alt='Hidratante' />
            <div>
              <p className={styles.subtitle}>
                VAMOS CONVERSAR?
                <br />
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <Link href='/contact' className={styles.linkFaleConosco}>
                <img className={styles.contactIcon} src={IconFaleConosco.src} />
                <p>Fale conosco</p>
              </Link>
            </div>
          </section>
        </div>
        <div className={styles.coverImageContainer}>
          <img className={styles.coverImage} src={ImageCover.src} alt="Cover" />
        </div>
      </Layout>
    </>
  );
}
export default About;