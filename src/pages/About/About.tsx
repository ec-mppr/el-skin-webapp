import Img1 from '../../assets/about_img_1.png';
import Img2 from '../../assets/about_img_2.png';
import ImageCover from '../../assets/about_img_cover.jpg';
import IconFaleConosco from '../../assets/icon_fale_conosco.svg';
import { Link } from 'react-router';
import styled from 'styled-components';

function About() {
  return (
    <>
      <Container>
        <SectionColumn>
          <Title>Sobre a AL SKIN</Title>
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
        </SectionColumn>
        <SectionColumn>
          <img src={Img2} alt='Hidratante'></img>
          <div>
            <Subtitle>
              VAMOS CONVERSAR?
              <br>
              </br>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </Subtitle>
          </div>
          <ButtonContainer>
            <StyledLink to={'/contact'}>
              <ContactIcon src={IconFaleConosco} />
              <p>Fale conosco</p>
            </StyledLink>
          </ButtonContainer>
        </SectionColumn>
      </Container>
      <CoverImageContainer>
        <CoverImage src={ImageCover} alt="Cover" />
      </CoverImageContainer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  margin-left: 144px;
  margin-right: 144px;
  align-items: center;
  gap: 2em;
  justify-content: center;
`;

const SectionColumn = styled.section`
  flex: 1;
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Subtitle = styled.p`
  font-weight: normal;
  margin-top: 3.75rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
  margin-top: 3.75rem;
`;

const CoverImageContainer = styled.div`
  margin-top: 3rem;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  object-fit: cover;
`;

const CoverImage = styled.img`
  object-fit: cover;
  width: 100vw;
`;

const ContactIcon = styled.img`
  margin-right: 12px;
`;

const StyledLink = styled(Link)`
  background-color: #94426E;
  color: white;
  border: none;
  border-radius: 8px;
  text-align: center;
  display: flex;
  padding: 15px 61px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    opacity: 70%;
    transition: opacity 0.5s ease;
  }
`;

export default About;