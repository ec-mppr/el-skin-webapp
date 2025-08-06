import './Cart.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'hooks/useCart';

interface CartProps {
  isShowing: boolean
  closeCart: () => void
}

function Cart(props: CartProps) {
  const { updateQuantity, totalPrice, getTotalItems, items, removeItem } = useCart();

  const formattedPrice = (price: number): string => {
    const roundedPrice = price.toFixed(2);
    return `R$${roundedPrice}`;
  };

  const totalProductPrice = (price: number, quantity: number): string => {
    const total = price * quantity;
    return formattedPrice(total);
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
            {items.length > 0 ? (
              items.map((product) => (
                <div key={product.id} className="cart-item">
                  <div className="cart-item-inner">
                    <img className='cart-item-image' src={product.image ?? '/prod1.jpg'} width={160} />
                    <div className='cart-item-details'>
                      <p className='cart-item-title' data-testid="cart-item-title">{product.name}</p>
                      <div className='cart-item-quantity-container'>
                        <FontAwesomeIcon icon={faMinusSquare} size="xl" className='button-minus' data-testid='decrease-quantity-button' onClick={() => updateQuantity(product.id, product.quantity - 1)} />
                        <input className='quantity-number' data-testid="quantity-number" readOnly value={product.quantity} />
                        <FontAwesomeIcon icon={faPlusSquare} size="xl" className='button-plus' data-testid='increase-quantity-button' onClick={() => updateQuantity(product.id, product.quantity + 1)} />
                      </div>
                      <p className='cart-item-price'>{totalProductPrice(product.price, product.quantity)}</p>
                    </div>
                    <FontAwesomeIcon icon={faTrashCan} size='xl' className='button-remove' color={'rgb(255, 81, 28)'} onClick={() => removeItem(product.id)} />
                  </div>
                  <hr className='cart-item-divider'></hr>
                </div>
              ))
            ) : (
              <p className="empty-cart">Seu carrinho está vazio.</p>
            )}
            <div className='footer'>
              <p className='total-price'><span className='total-price-label'>Total:</span> <span>{formattedPrice(totalPrice)}</span></p>
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