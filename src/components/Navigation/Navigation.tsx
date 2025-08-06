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
      <PromotionBanner>Kits até 50% OFF</PromotionBanner>
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
  padding-left: 1rem;
  list-style-type: none;
  max-width: 1230px;
`;

const NavigationItem = styled.li`
  text-decoration: none;
  padding: 0 6rem 0.25rem 0;
`;

const PromotionBanner = styled.p`
  font-weight: bold;
  color: #DC5E5E;
`;

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #222222;
  font-size: 16px;

  &:hover {
    opacity: 70%;
    transition: all 0.5s ease;
  }
`;

export default Navigation;