import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';

function Header() {
  const [textoBusca, setTextoBusca] = useState('');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextoBusca(e.target.value);
  }

  function onClickSearch(): void {
    console.log(`Você pesquisou por: ${textoBusca}`);
  }

  function openCart(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    console.log('TODO: abrir carrinho');
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
              onChange={handleOnChange}/>
            <button className="search-button" onClick={onClickSearch}>
              <FontAwesomeIcon icon={faSearch}/>
            </button>
          </div>

          <div className="header-actions">
            <button className="cart-button" onClick={openCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <Cart />
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