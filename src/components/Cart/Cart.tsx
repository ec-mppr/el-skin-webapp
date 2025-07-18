import { useContext, useState } from 'react';
import './Cart.css';
import { CartContext } from '../../context/cartContext';

function Cart() {
  const cartContext = useContext(CartContext);
  
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

export default Cart;