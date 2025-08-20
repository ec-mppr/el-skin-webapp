'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';
import { useCart } from 'hooks/useCart';
import { useSearch } from 'hooks/useSearch';
import styled from 'styled-components';
import Link from 'next/link'
import styles from './Header.module.css'

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
          <Link href="/" className={styles.logo}>AL SKIN</Link>
          <SearchBar>
            <SearchInput type="text"
              data-testid="search-box"
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
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e5e5e5;
`;

const HeaderTop = styled.div`
  padding: 1rem;
  border-bottom: none;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchBar = styled.div`
  flex: 2;
  max-width: 400px;
  margin: 0 2rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0rem 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: #F5F5F5;
  font-family: 'Poppins';
  border: none;
  &:focus {
    border-color: #007BFF;
  }

  &::placeholder {
    color: #666;
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
  padding: 0.5rem;
  border-radius: 50%;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
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
  padding: 0.5rem;
  border-radius: 50%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CartButtonQuantity = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #DC995E;
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