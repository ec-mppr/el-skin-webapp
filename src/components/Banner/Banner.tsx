import styled from 'styled-components';

function Banner() {
  return (
    <StyledBanner>
      <ContainerBanner>
        <Texto1>Primeira compra?</Texto1>
        <Texto2><b>R$25 OFF</b> A PARTIR DE <b>R$200</b></Texto2>
        <Texto3>PRIMEIRA25</Texto3>
      </ContainerBanner>
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.tertiary};
  padding: 0.1rem;
  justify-content: center;
`;

const ContainerBanner = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
`;

const Texto1 = styled.p`
  font-weight: ${props => props.theme.fontWeight.bold};
  color: white;
`;

const Texto2 = styled.p`
  margin-left:  ${props => props.theme.spacing.xl};
`;

const Texto3 = styled.p`
  margin-left:  ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: white;
  font-weight: ${props => props.theme.fontWeight.bold};
  padding: 2px 13px;
`;

export default Banner;