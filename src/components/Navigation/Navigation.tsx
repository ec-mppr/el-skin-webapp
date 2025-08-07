import { Link } from 'react-router';
import styled from 'styled-components';

interface NavigationItem {
  title: string
  href: string
}

const listNavigationItems: NavigationItem[] = [
  { title: 'Categorias', href: '' },
  { title: 'Tipo de pele', href: '' },
  { title: 'Necessidade', href: '' },
  { title: 'Ingredientes', href: '' }
];

function Navigation() {
  return (
    <NavigationContainer>
      <NavigationList>
        {listNavigationItems.map((item) => (
          <NavigationItem key={item.title}>
            <NavigationLink to={item.href}>{item.title}</NavigationLink>
          </NavigationItem>
        ))}
      </NavigationList>
      <PromotionText>Kits até 50% OFF</PromotionText>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  display: flex;
  justify-items: space-between;
  justify-content: space-between;
  align-items: center;
  max-width: 1230px;
  width: 1230px;
`;

const NavigationList = styled.ul`
  display: flex;
  margin-left: 0;
  padding-left: ${props => props.theme.spacing.md};
  list-style-type: none;
  max-width: 1230px;
`;

const NavigationItem = styled.li`
  text-decoration: none;
  padding: 0 6rem  ${props => props.theme.spacing.xxs} 0;
`;

const PromotionText = styled.p`
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.promo};
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #222222;
  font-size: ${props => props.theme.fontSize.base};

  &:hover {
    opacity: 70%;
    transition: all 0.5s ease;
  }
`;

export default Navigation;