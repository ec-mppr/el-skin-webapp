import { useEffect } from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDetailsProduct } from '../../services/productService';
import { IProduct } from '../../types/IProduct';

interface CartProps {
  isShowing: boolean
  closeCart: () => void
}

function Cart(props: CartProps) {
  const { cartProducts } = useCartContext();

  useEffect(() => {
    console.log(cartProducts);
    // TODO: buscar detalhes do produto na db por id
  });

  if (props.isShowing) {
    return (
      <div className='cart-overlay'>
        <div className="cart-container">
          <div className="cart-header">
            <h3 className="cart-title">Carrinho</h3>
            <FontAwesomeIcon icon={faXmark} color='white' className='cart-close-icon' size="lg" onClick={() => props.closeCart()}/>
          </div>

          <div className="cart-body">
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <div key={product.id} className="cart-item">
                  <p>Produto: {product.id}</p>
                </div>
              ))
            ) : (
              <p className="empty-cart">Seu carrinho está vazio.</p>
            )}
          </div>
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