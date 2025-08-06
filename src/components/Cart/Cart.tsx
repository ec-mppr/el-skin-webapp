import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCart } from 'hooks/useCart';
import styled from 'styled-components';

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
      <CartOverlay>
        <CartContainer>
          <CartHeader>
            <h3>Carrinho</h3>
            <CartCloseButton icon={faXmark} color='white' data-testid="cart-close" className='cart-close-icon' size="lg" onClick={() => props.closeCart()} />
          </CartHeader>
          <CartBody>
            {items.length > 0 ? (
              items.map((product) => (
                <>
                  <div key={product.id}>
                    <CartItemInner>
                      <CartItemImage src={product.image ?? '/prod1.jpg'} width={160} />
                      <CartItemsDetails>
                        <CartItemTitle data-testid="cart-item-title">{product.name}</CartItemTitle>
                        <CartItemQuantityContainer>
                          <ButtonQuantity icon={faMinusSquare} size="xl" className='button-minus' data-testid='decrease-quantity-button' onClick={() => updateQuantity(product.id, product.quantity - 1)} />
                          <QuantityNumber data-testid="quantity-number" readOnly value={product.quantity} />
                          <ButtonQuantity icon={faPlusSquare} size="xl" className='button-plus' data-testid='increase-quantity-button' onClick={() => updateQuantity(product.id, product.quantity + 1)} />
                        </CartItemQuantityContainer>
                        <p>{totalProductPrice(product.price, product.quantity)}</p>
                      </CartItemsDetails>
                      <ButtonQuantity icon={faTrashCan} size='xl' className='button-remove' color={'rgb(255, 81, 28)'} onClick={() => removeItem(product.id)} />
                    </CartItemInner>
                  </div>
                  <CartItemDivider />
                </>
              ))
            ) : (
              <EmptyCart>Seu carrinho está vazio.</EmptyCart>
            )}
            <Footer>
              <TotalPrice><span>Total: </span>{formattedPrice(totalPrice)}</TotalPrice>
              <FinalizarCompraButton>Finalizar compra</FinalizarCompraButton>
            </Footer>
          </CartBody>
        </CartContainer>
      </CartOverlay>
    );
  }
  else {
    return (
      <div>
      </div>
    );
  }
}

const CartCloseButton = styled(FontAwesomeIcon)`
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;

  &:hover {
  transform: scale(120%);
  }
`;

const ButtonQuantity = styled(FontAwesomeIcon)`
  padding: 1rem;
  
  &:hover {
    transform: scale(120%);
    cursor: pointer;
    }
`;

const CartOverlay = styled.div`
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const CartContainer = styled.div`
  position: fixed;
  margin-top: 10%;
  margin-left: 35%;
  background-color: white;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  width: 30%;
  max-height: 50%;
  overflow-y: auto;
  scrollbar-color: rgba(255, 115, 0, 0.319) rgb(255, 255, 255);
  scrollbar-width: thin;
  overflow-x: hidden;
  box-shadow: 12px 4px 12px rgba(0, 0, 0, 0.08);
  `;

const CartHeader = styled.div`
  display: flex;
  position: relative;
  top: 0;
  background-color: #94426E;
  border-top-left-radius: 12px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & h3 {
    padding: 0.25rem 1rem 0 2rem;
    color: white;
  }
  `;

const CartBody = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  `;

const CartItemInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem 2rem 1rem;
  `;

const CartItemImage = styled.img`
  border-radius: 12px;
  object-fit: fill;
  `;

const CartItemsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 2rem;
  `;

const CartItemTitle = styled.p`
  font-weight: bold;
  `;

const CartItemQuantityContainer = styled.div`
  display: flex;
  margin-left: 0;
  align-items: center;
  justify-content: start;
  `;


const QuantityNumber = styled.input`
  padding: 1rem;
  width: 2rem;
  height: 16px;
  text-align: center;
  border: none;
  font-family: 'Shippori Antique', sans-serif;
  font-size: 16px;
  `;

const CartItemDivider = styled.hr`
  border-top: 1px dashed #94426E;
  margin-bottom: 2rem;
  `;

const EmptyCart = styled.p`
  padding: 2rem 2rem 2rem 2rem;
  text-align: center;
  `;

const Footer = styled.div`
  display: flex;
  justify-items: space-between;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  `;

const TotalPrice = styled.p`
  font-size: 1.1rem;
  padding: 0 0.5rem 0 0.5rem;

  & span {
    font-weight: bold;
  }
  `;

const FinalizarCompraButton = styled.button`
  background: linear-gradient(135deg, #8B4A8B 0%, #A855A8 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 32px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: lowercase;
  margin: 0;

  &:hover {
  background: linear-gradient(135deg, #7A3E7A 0%, #9333EA 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 74, 139, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid #8B4A8B;
    outline-offset: 2px;
  }
  `;

export default Cart;