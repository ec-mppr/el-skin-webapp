import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Carousel.module.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface ICarouselItem {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
}

function Carousel() {
  const [items, setItems] = useState<ICarouselItem[]>([]);

  const [idxItemAtual, setIdxItemAtual] = useState(0);

  const timer = useRef<NodeJS.Timer>(undefined);

  function previousItem() {
    setIdxItemAtual((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
  }

  function nextItem() {
    setIdxItemAtual((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));
  }

  useEffect(() => {
    axios.get('http://localhost:3001/carousel').then((response) => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => {
      nextItem();
    }, 3000);

    return () => {
      clearInterval(timer.current);
    };
  }, [items]);

  return (
    <section
      className={styles.carouselSection}
      style={{
        backgroundImage: `url(${items[idxItemAtual]?.backgroundImage})`,
      }}
    >
      <div
        className={styles.carouselContainer}
      >
        <div className={styles.carouselContent}>
          <button className={styles.carouselNavButton} aria-label="Voltar" onClick={previousItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleLeft} style={{ color: 'white' }} />
          </button>

          <div className={styles.carouselText}>
            <span className={styles.carouselSubtitle}>{items[idxItemAtual]?.subtitle}</span>
            <h1 className={styles.carouselTitle}>{items[idxItemAtual]?.title}</h1>
            <p className={styles.carouselDescription}>{items[idxItemAtual]?.description}</p>
            <button
              className={styles.carouselCtaButton}>
            comprar agora
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

          <button className={styles.carouselNavButton} aria-label="Próximo" onClick={nextItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleRight} style={{ color: 'white' }} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carousel;