import { useCartContext } from '../../context/CartContext';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

interface CartProps {
  isShowing: boolean
  closeCart: () => void
}

function Cart(props: CartProps) {
  const { updateQuantity, totalPrice, getTotalItems, items, removeItem } = useCartContext();

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
            <CartCloseButton icon={faXmark} color='white' data-testid="cart-close" size="lg" onClick={() => props.closeCart()} />
          </CartHeader>
          <CartBody>
            {items.length > 0 ? (
              items.map((product) => (
                <div key={product.id}>
                  <CartItemInner>
                    <CartItemImage src={product.image ?? '/prod1.jpg'} width={160} />
                    <CartItemsDetails>
                      <CartItemTitle data-testid="cart-item-title">{product.name}</CartItemTitle>
                      <CartItemQuantityContainer>
                        <ButtonQuantity icon={faMinusSquare} size="xl" data-testid='decrease-quantity-button' onClick={() => updateQuantity(product.id, product.quantity - 1)} />
                        <QuantityNumber data-testid="quantity-number" readOnly value={product.quantity} />
                        <ButtonQuantity icon={faPlusSquare} size="xl" data-testid='increase-quantity-button' onClick={() => updateQuantity(product.id, product.quantity + 1)} />
                      </CartItemQuantityContainer>
                      <p>{totalProductPrice(product.price, product.quantity)}</p>
                    </CartItemsDetails>
                    <ButtonRemove icon={faTrashCan} size='xl' onClick={() => removeItem(product.id)} />
                  </CartItemInner>
                  <CartItemDivider />
                </div>
              ))
            ) : (
              <EmptyCart>Seu carrinho está vazio.</EmptyCart>
            )}
            <Footer>
              <TotalPrice>Total: {formattedPrice(totalPrice)}</TotalPrice>
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
  padding: ${props => props.theme.spacing.md}  ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md}  ${props => props.theme.spacing.xl};
  cursor: pointer;

  &:hover {
  transform: scale(120%);
  }
`;

const ButtonQuantity = styled(FontAwesomeIcon)`
  padding: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.cart.controls};
  
  &:hover {
    transform: scale(120%);
    cursor: pointer;
    }
`;

const ButtonRemove = styled(ButtonQuantity)`
  color: ${props => props.theme.colors.cart.remove}
`;

const CartOverlay = styled.div`
  width: 100%;
  z-index: ${props => props.theme.zIndex.modal};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background-color: ${props => props.theme.colors.cart.overlay};
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
  box-shadow: 12px 4px 12px ${props => props.theme.colors.shadow.medium};
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
    padding:  ${props => props.theme.spacing.xxs} ${props => props.theme.spacing.md} 0  ${props => props.theme.spacing.xl};
    color: white;
  }
  `;

const CartBody = styled.div`
  padding:  ${props => props.theme.spacing.xl}  ${props => props.theme.spacing.xl}  ${props => props.theme.spacing.xl}  ${props => props.theme.spacing.xl};
  `;

const CartItemInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${props => props.theme.spacing.md}  ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
  `;

const CartItemImage = styled.img`
  border-radius: ${props => props.theme.borderRadius.lg};
  object-fit: fill;
  `;

const CartItemsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;
  justify-content: center;
  width: 100%;
  margin-left:  ${props => props.theme.spacing.xl};
  `;

const CartItemTitle = styled.p`
  font-weight: ${props => props.theme.fontWeight.bold};
  `;

const CartItemQuantityContainer = styled.div`
  display: flex;
  margin-left: 0;
  align-items: center;
  justify-content: start;
  `;


const QuantityNumber = styled.input`
  padding: ${props => props.theme.spacing.md};
  width:  ${props => props.theme.spacing.xl};
  height: 16px;
  text-align: center;
  border: none;
  font-family: 'Shippori Antique', sans-serif;
  font-size: ${props => props.theme.fontSize.base};
  `;

const CartItemDivider = styled.hr`
  border-top: 1px dashed #94426E;
  margin-bottom:  ${props => props.theme.spacing.xl};
  `;

const EmptyCart = styled.p`
  padding:  ${props => props.theme.spacing.xl}  ${props => props.theme.spacing.xl}  ${props => props.theme.spacing.xl}  ${props => props.theme.spacing.xl};
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
  font-size: ${props => props.theme.fontSize.base};
  padding: 0 ${props => props.theme.spacing.xs} 0 ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.cart.price};
  font-weight: ${props => props.theme.fontWeight.bold};

  & span {
    font-weight: ${props => props.theme.fontWeight.bold};
  }
  `;

const FinalizarCompraButton = styled.button`
  background: ${props => props.theme.colors.primaryGradient};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 32px;
  font-size: ${props => props.theme.spacing.md};
  font-weight: 600;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  text-transform: lowercase;
  margin: 0;

  &:hover {
  background: ${props => props.theme.colors.primaryGradientHover};
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 74, 139, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }
  `;

export default Cart;