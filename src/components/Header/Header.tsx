import React, { useContext, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';
import { useCart } from 'hooks/useCart';
import { useSearch } from 'hooks/useSearch';

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
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <span>AL SKIN</span>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="search-input"
              onChange={handleOnChange} />
            <button className="search-button" data-testid="search-button" onClick={onClickSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="header-actions">
            <button className="cart-button" data-testid="cart-button" onClick={openCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <p className='cart-button-quantity' data-testid='cart-button-quantity'>{getTotalItems()}</p>
            <Cart isShowing={showCart} closeCart={() => setShowCart(false)} />
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <Navigation />
      </nav>

    </header>
  );
}

export default Header;