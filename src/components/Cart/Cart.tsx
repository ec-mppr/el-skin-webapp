import { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { CartContext } from '../../context/cartContext';

interface CartProps {
  isShowing: boolean
}

function Cart(props: CartProps) {
  const cartContext = useContext(CartContext);

  useEffect(() => {
    console.log(cartContext.cartProducts);
  });

  if (props.isShowing) {
    return (
      <div>
        <h2 className="cart-title">Carrinho de Compras</h2>
        <div className="cart-container">
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