import { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { CartContext } from '../../context/cartContext';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CartProps {
  isShowing: boolean
  closeCart: () => void
}

function Cart(props: CartProps) {
  const cartContext = useContext(CartContext);

  useEffect(() => {
    console.log(cartContext.cartProducts);
  });

  if (props.isShowing) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h3 className="cart-title">Carrinho</h3>
          <FontAwesomeIcon icon={faXmark} color='white' className='cart-close-icon' size="lg" onClick={() => props.closeCart()}/>
        </div>

        <div className="cart-body">
          {cartContext.cartProducts.length > 0 ? (
            cartContext.cartProducts.map((productId) => (
              <div key={productId} className="cart-item">
                <p>Produto: {productId}</p>
              </div>
            ))
          ) : (
            <p className="empty-cart">Seu carrinho está vazio.</p>
          )}
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
      </div>
    );
  }
}

export default Cart;