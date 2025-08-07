import React from 'react';
import { IProduct } from '../../types/IProduct';
import styled from 'styled-components';

interface ProductCardProps {
  product: IProduct;
  onProductClick: (productId: string) => void;
  onBuyClick: (productId: string, event: React.MouseEvent) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
  onBuyClick
}) => {
  const formatPrice = (price: number): string => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <LinkCardContainer data-testid="product-card" onClick={() => onProductClick(product.id)}>
      <Card>
        <ProductImageContainer>
          <img
            src={product.image}
            alt={product.name}
          />
        </ProductImageContainer>

        <ProductInfoContainer>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>

          <ProductTags>
            {product.tags.map((tag) => (
              <ProductTag
                key={`${product.id}-${tag.label}-${tag.type}`}
                $tagType={tag.type as ProductTagType}>
                {tag.label}
              </ProductTag>
            ))}

          </ProductTags>

        </ProductInfoContainer>

        <ProductFooter>
          <ProductPrice>
            {formatPrice(product.price)}

          </ProductPrice>
          <ProductBuyButton onClick={(e) => onBuyClick(product.id, e)}
            type="button">
            comprar
          </ProductBuyButton>

        </ProductFooter>
      </Card>
    </LinkCardContainer>
  );
};

const Card = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  transition: all ${props => props.theme.transitions.normal};
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  border: 1px solid ${props => props.theme.colors.background.gray};
  padding: 0;
  text-align: left;
  font-family: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${props => props.theme.colors.shadow.dark};
  }
`;

const LinkCardContainer = styled.a`
  cursor: pointer;
`;

const ProductImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: #C8B99C;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductInfoContainer = styled.div`
  padding: 20px;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px 20px;
`;

const ProductBuyButton = styled.button`
  background: ${props => props.theme.colors.primaryGradient};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: ${props => props.theme.borderRadius.xxl};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 600;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.normal};
  text-transform: lowercase;

&:hover {
  background: ${props => props.theme.colors.primaryGradientHover};
  transform: translateY(-1px);
  box-shadow: ${props => props.theme.shadows.primary};
}

&:active {
  transform: translateY(0);
}

&:focus {
  outline: 2px solid ${props => props.theme.colors.primary};
  outline-offset: 2px;
}
`;

const ProductPrice = styled.span`
  font-size: ${props => props.theme.fontSize.lg};
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
`;

const ProductName = styled.h3`
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const ProductDescription = styled.p`
  font-size: ${props => props.theme.fontSize.sm};
  color: ${props => props.theme.colors.text.secondary};
  margin: 0 0 16px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductTags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

enum ProductTagType {
  FACE = 'face',
  PROTECTION = 'protection'
}

const ProductTag = styled.span<{ $tagType: ProductTagType }>`
  padding: 4px 12px;
  border-radius: ${props => props.theme.borderRadius.xl};
  font-size: ${props => props.theme.fontSize.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${({ theme, $tagType }) => $tagType == ProductTagType.FACE ? theme.colors.tag.face.bg : ($tagType == ProductTagType.PROTECTION ? theme.colors.tag.protection.bg : theme.colors.tag.others.bg)};
  color: ${({ theme, $tagType }) => $tagType == ProductTagType.FACE ? theme.colors.tag.face.text : ($tagType == ProductTagType.PROTECTION ? theme.colors.tag.protection.text : theme.colors.tag.others.text)};
`;

export default ProductCard;