import './Cart.css';
import { useCartContext } from '../../context/CartContext';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CartActionType } from '../../reducer/cartReducer';

interface CartProps {
  isShowing: boolean
  closeCart: () => void
}

function Cart(props: CartProps) {
  const { state, dispatch, data } = useCartContext();

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
            <FontAwesomeIcon icon={faXmark} color='white' data-testid="cart-close" className='cart-close-icon' size="lg" onClick={() => props.closeCart()} />
          </div>

          <div className="cart-body">
            {state.cartProducts.length > 0 ? (
              state.cartProducts.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-inner">
                    <img className='cart-item-image' src={product.image ?? '/prod1.jpg'} width={160} />
                    <div className='cart-item-details'>
                      <p className='cart-item-title' data-testid="cart-item-title">{product.name}</p>
                      <div className='cart-item-quantity-container'>
                        <FontAwesomeIcon icon={faMinusSquare} size="xl" className='button-minus' data-testid='decrease-quantity-button' onClick={() => dispatch({ type: CartActionType.DECREASE_QUANTITY, payload: { cartProduct: product } })} />
                        <input className='quantity-number' data-testid="quantity-number" readOnly value={product.quantity} />
                        <FontAwesomeIcon icon={faPlusSquare} size="xl" className='button-plus' data-testid='increase-quantity-button' onClick={() => dispatch({ type: CartActionType.INCREASE_QUANTITY, payload: { cartProduct: product } })} />
                      </div>
                      <p className='cart-item-price'>{formattedPrice(product.totalPrice ?? product.price)}</p>
                    </div>
                    <FontAwesomeIcon icon={faTrashCan} size='xl' className='button-remove' color={'rgb(255, 81, 28)'} onClick={() => dispatch({ type: CartActionType.REMOVE_PRODUCT, payload: { cartProduct: product } })} />
                  </div>
                  <hr className='cart-item-divider'></hr>
                </div>
              ))
            ) : (
              <p className="empty-cart">Seu carrinho está vazio.</p>
            )}
            <div className='footer'>
              <p className='total-price'><span className='total-price-label'>Total:</span> <span>{formattedPrice(data.cartPriceTotal)}</span></p>
              <button className='finalizar-compra-button'>Finalizar compra</button>
            </div>
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