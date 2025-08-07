import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Carousel.module.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Endpoint, get } from 'services/api';
import styled, { keyframes } from 'styled-components';

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
    getCarouselItems();
  }, []);

  async function getCarouselItems() {
    await get<ICarouselItem[]>(Endpoint.CAROUSEL).then((response) => {
      setItems(response.data);
    });
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      nextItem();
    }, 3000);

    return () => {
      clearInterval(timer.current);
    };
  }, [items]);

  return (
    <CarouselSection style={{
      backgroundImage: `url(${items[idxItemAtual]?.backgroundImage})`,
    }}>
      <CarouselContainer>
        <CarouselContent>
          <CarouselNavButton aria-label="Voltar" onClick={previousItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleLeft} style={{ color: 'white' }} />
          </CarouselNavButton>

          <CarouselText>
            <CarouselSubtitle>
              {items[idxItemAtual]?.subtitle}</CarouselSubtitle>
            <CarouselTitle>{items[idxItemAtual]?.title}</CarouselTitle>
            <CarouselDescription>{items[idxItemAtual]?.description}</CarouselDescription>
            <CarouselCtaButton>
              comprar agora
              <FontAwesomeIcon icon={faAngleRight} />
            </CarouselCtaButton>
          </CarouselText>
          <CarouselNavButton aria-label="Próximo" onClick={nextItem}>
            <FontAwesomeIcon width="60" height="24" icon={faAngleRight} style={{ color: 'white' }} />
          </CarouselNavButton>
        </CarouselContent>
      </CarouselContainer>
    </CarouselSection>
  );
}

const CarouselSection = styled.section`
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 40%, transparent 60%),
              linear-gradient(45deg, #f8f6f3 0%, #e8e4e0 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const CarouselContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 1000px;

`;

const CarouselNavButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-2px);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CarouselText = styled.div`
  flex: 1;

  & > * {
    animation: ${fadeInUp} ${props => props.theme.transitions.slow}-out forwards;
  }
`;

const CarouselTitle = styled.h1`
  font-size: ${props => props.theme.fontSize['6xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin: 0;
  margin-bottom: 16px;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(139, 74, 139, 0.1);
  animation-delay: 0.2s;
`;

const CarouselSubtitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSize.base};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 8px;
  font-weight: 400;
  letter-spacing: 0.5px;
  animation-delay: 0.1s;
`;

const CarouselDescription = styled.p`
  font-size: ${props => props.theme.fontSize.lg};
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 32px;
  line-height: 1.5;
  max-width: 400px;
  animation-delay: 0.3s;
`;

const CarouselCtaButton = styled.button`
  background: ${props => props.theme.colors.primaryGradient};
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 32px;
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 600;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 16px ${props => props.theme.colors.shadow.primary};
  text-transform: lowercase;
  animation-delay: 0.4s;

  &:hover {
    background: ${props => props.theme.colors.primaryGradientHover};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px ${props => props.theme.colors.shadow.primaryHover};
  }

  &:active {
    transform: translateY(0);
  }
`;

export default Carousel;