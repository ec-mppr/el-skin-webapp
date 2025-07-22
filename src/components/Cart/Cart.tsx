import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { CartActionType } from '../../reducer/cartReducer';

interface CartProps {
  isShowing: boolean
  closeCart: () => void
}

function Cart(props: CartProps) {
  const { state, dispatch } = useCartContext();

  const formattedPrice = (price: number): string => {
    const roundedPrice = price.toFixed(2);
    return `R$${roundedPrice}`;
  };

  if (props.isShowing) {
    return (
      <div className='cart-overlay'>
        <div className="cart-container">
          <div className="cart-header">
            <h3 className="cart-title">Carrinho</h3>
            <FontAwesomeIcon icon={faXmark} color='white' className='cart-close-icon' size="lg" onClick={() => props.closeCart()} />
          </div>

          <div className="cart-body">
            {state.cartProducts.length > 0 ? (
              state.cartProducts.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-inner">
                    <img className='cart-item-image' src={product.image ?? '/prod1.jpg'} width={160} />
                    <div className='cart-item-details'>
                      <p className='cart-item-title'>{product.name}</p>
                      <div className='cart-item-quantity-container'>
                        <FontAwesomeIcon icon={faMinusSquare} size="xl" color={'rgb(255, 81, 28)'} className='button-minus' onClick={() => dispatch({type: CartActionType.DECREASE_QUANTITY, cartProduct: product})} />
                        <input className='quantity-number' readOnly value={product.quantity} />
                        <FontAwesomeIcon icon={faPlusSquare} size="xl" color={'rgba(63, 194, 7, 1)'} className='button-plus' onClick={() => dispatch({type: CartActionType.INCREASE_QUANTITY, cartProduct: product})} />
                      </div>
                      <p className='cart-item-price'>{formattedPrice(product.totalPrice ?? product.price)}</p>
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