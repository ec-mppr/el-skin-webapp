import styled from 'styled-components';

function NotFound() {
  return (
    <>
      <ContainerNotFound>
        <TitleNotFound>
          <p>Página não encontrada</p>
        </TitleNotFound>
      </ContainerNotFound>
    </>
  );
}

const ContainerNotFound = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-items: start;
  justify-content: start;
  align-content: center;
  text-align: start;
  object-fit: fill;
  background-image: url("/img_1_carousel.png");
`;

const TitleNotFound = styled.div`
  justify-self: center;
  max-width: 1200px;
  height: 50vh;
  margin-top: auto;
  text-align: center;
  justify-content: center;

  p {
    font-size: 32px;
    color: white;
    padding:  ${props => props.theme.spacing.xl};
    font-weight: ${props => props.theme.fontWeight.bold};
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: ${props => props.theme.borderRadius.md};
    margin-left: 6rem;
  }
`;

export default NotFound;