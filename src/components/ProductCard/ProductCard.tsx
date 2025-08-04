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
    <StyledLinkCardContainer data-testid="product-card" onClick={() => onProductClick(product.id)}>
      <StyledCard>
        <StyledProductImageContainer>
          <img
            src={product.image}
            alt={product.name}
          />
        </StyledProductImageContainer>

        <StyledProductInfoContainer>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductDescription>{product.description}</StyledProductDescription>

          <StyledProductTags>
            {product.tags.map((tag) => (
              <StyledProductTag
                key={`${product.id}-${tag.label}-${tag.type}`}
                $tagType={tag.type as ProductTagType}>
                {tag.label}
              </StyledProductTag>
            ))}

          </StyledProductTags>

        </StyledProductInfoContainer>

        <StyledProductFooter>
          <StyledProductPrice>
            {formatPrice(product.price)}

          </StyledProductPrice>
          <StyledProductBuyButton onClick={(e) => onBuyClick(product.id, e)}
            type="button">
            comprar
          </StyledProductBuyButton>

        </StyledProductFooter>
      </StyledCard>
    </StyledLinkCardContainer>
  );
};

const StyledCard = styled.div`
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  border: 1px solid #f0f0f0;
  padding: 0;
  text-align: left;
  font-family: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const StyledLinkCardContainer = styled.a`
  cursor: pointer;
`;

const StyledProductImageContainer = styled.div`
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

const StyledProductInfoContainer = styled.div`
  padding: 20px;
`;

const StyledProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px 20px;
`;

const StyledProductBuyButton = styled.button`
  background: linear-gradient(135deg, #8B4A8B 0%, #A855A8 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: lowercase;


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

const StyledProductPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

const StyledProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const StyledProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledProductTags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

enum ProductTagType {
  FACE = 'face',
  PROTECTION = 'protection'
}

const StyledProductTag = styled.span<{ $tagType: ProductTagType }>`
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${({ $tagType }) =>
    $tagType === ProductTagType.FACE ? '#F0C4C4' : ($tagType == ProductTagType.PROTECTION ? '#E3F2FD' : '#f3fde3')};
    color: ${({ $tagType }) =>
    $tagType === ProductTagType.FACE ? '#C2185B' : ($tagType == ProductTagType.PROTECTION ? '#1976D2' : '#5f7d2f')};
`;

export default ProductCard;