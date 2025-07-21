import React, { useContext, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Cart from '../Cart/Cart';
import { SearchContext } from '../../context/SearchContext';
import { useCartContext } from '../../context/CartContext';
import { getDetailsProduct } from '../../services/productService';
import { IProduct } from '../../types/IProduct';

function Header() {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { search, setSearch} = useContext(SearchContext);
  const { cartProducts } = useCartContext();
  const [cartProductsDetails, setCartProductsDetails] = useState<IProduct[]>([]);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function onClickSearch(): void {
    console.log(`Você pesquisou por: ${search}`);
  }

  async function openCart(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    event.preventDefault();
    const productsDetails: IProduct[] = [];
    const promises = cartProducts.map(async (product) => {
      getDetailsProduct(product.id).then((details) => {
        if (details) {
          console.log(details);
          productsDetails.push(details);
        }
      });
    });
    await Promise.all(promises);
    setCartProductsDetails(productsDetails);
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
              onChange={handleOnChange}/>
            <button className="search-button" onClick={onClickSearch}>
              <FontAwesomeIcon icon={faSearch}/>
            </button>
          </div>

          <div className="header-actions">
            <button className="cart-button" onClick={openCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
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