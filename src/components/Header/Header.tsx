import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';
import { useCart } from 'hooks/useCart';
import { useSearch } from 'hooks/useSearch';
import styled from 'styled-components';
import { Link } from 'react-router';

function Header() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { getTotalItems } = useCart();
  const { term, setTerm } = useSearch();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }

  function onClickSearch(): void {
    console.log(`Você pesquisou por: ${term}`);
  }

  async function openCart(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    event.preventDefault();
    setShowCart(!showCart);
  }

  return (
    <StyledHeader>
      <HeaderTop>
        <Container>
          <Logo to={'/'}>AL SKIN</Logo>
          <SearchBar>
            <SearchInput type="text"
              placeholder="O que você está procurando?"
              onChange={handleOnChange} />
            <SearchButton data-testid="search-button" onClick={onClickSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </SearchButton>

          </SearchBar>
          <HeaderActions >
            <CartButton data-testid="cart-button" onClick={openCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </CartButton>

            <CartButtonQuantity data-testid='cart-button-quantity'>{getTotalItems()}</CartButtonQuantity>
            <Cart isShowing={showCart} closeCart={() => setShowCart(false)} />
          </HeaderActions>
        </Container>
      </HeaderTop>

      <HeaderNav>
        <Navigation />
      </HeaderNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.background.white};
  box-shadow: ${props => props.theme.shadows.sm};
  border-bottom: 1px solid ${props => props.theme.colors.border.light};
`;

const HeaderTop = styled.div`
  padding: ${props => props.theme.spacing.md} 0;
  border-bottom: none;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: ${props => props.theme.fontSize['2xl']};
  font-family: 'Shippori Antique';
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.text.primary};
  margin: 0;
  letter-spacing: 0.5px;
  text-decoration: none;

  &:hover {
    opacity: 80%;
  }
`;

const SearchBar = styled.div`
  flex: 2;
  max-width: 400px;
  margin: 0  ${props => props.theme.spacing.xl};
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding:  ${props => props.theme.spacing.xs} 0rem  ${props => props.theme.spacing.xs} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.fontSize.base};
  outline: none;
  transition: border-color ${props => props.theme.transitions.normal};
  background-color: #F5F5F5;
  font-family: 'Poppins';
  border: none;
  &:focus {
  border-color: ${props => props.theme.colors.secondary};
  }

  &::placeholder {
      color: ${props => props.theme.colors.text.secondary};
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding:  ${props => props.theme.spacing.xs};
  border-radius: ${props => props.theme.borderRadius.round};
  color: ${props => props.theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color ${props => props.theme.transitions.normal};

  &:hover {
    background-color: ${props => props.theme.colors.background.gray};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding:  ${props => props.theme.spacing.xs};
  border-radius: ${props => props.theme.borderRadius.round};
  color: ${props => props.theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color ${props => props.theme.transitions.normal};

  &:hover {
    background-color: ${props => props.theme.colors.background.gray};
  }
`;

const CartButtonQuantity = styled.p`
  font-size: ${props => props.theme.fontSize.base};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.tertiary};
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-items: space-between;
  align-content: center;
  align-items: center;
  margin: auto;
  width: 1230px;
`;

export default Header;