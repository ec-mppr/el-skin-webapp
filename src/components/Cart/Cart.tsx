import { useEffect } from 'react';
import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

interface CartProps {
  isShowing: boolean
  closeCart: () => void
}

function Cart(props: CartProps) {
  const removeProduct = (productId: string) => {
    const newList = cartProducts.flatMap((product) => {
      if (product.id == productId) {
        if (product.quantity > 0) {
          product.quantity--;
          return product;
        } else {
          return [];
        }
      }
      return product;
    });
    setCartProducts(newList);
  };

  const addProduct = (productId: string) => {
    const newList = cartProducts.flatMap((product) => {
      if (product.id == productId) {
        if (product.quantity < 100) {
          product.quantity++;
          return product;
        }
      }
      return product;
    });
    setCartProducts(newList);
  };

  const { cartProducts, setCartProducts } = useCartContext();

  if (props.isShowing) {
    return (
      <div className='cart-overlay'>
        <div className="cart-container">
          <div className="cart-header">
            <h3 className="cart-title">Carrinho</h3>
            <FontAwesomeIcon icon={faXmark} color='white' className='cart-close-icon' size="lg" onClick={() => props.closeCart()} />
          </div>

          <div className="cart-body">
            {cartProducts.length > 0 ? (
              cartProducts.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-inner">
                    <img className='cart-item-image' src={product.image ?? '/prod1.jpg'} width={160} />
                    <div className='cart-item-details'>
                      <p className='cart-item-title'>{product.name}</p>
                      <div className='cart-item-quantity-container'>
                        <FontAwesomeIcon icon={faMinusSquare} size="xl" color={'rgb(255, 81, 28)'} className='button-minus' onClick={() => removeProduct(product.id)} />
                        <input className='quantity-number' readOnly value={product.quantity} />
                        <FontAwesomeIcon icon={faPlusSquare} size="xl" color={'rgba(63, 194, 7, 1)'} className='button-plus' onClick={() => addProduct(product.id)} />
                      </div>
                    </div>
                  </div>
                  <hr className='cart-item-divider'></hr>
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