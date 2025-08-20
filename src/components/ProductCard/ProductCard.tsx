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
  background: linear-gradient(135deg, #8B4A8B 0%, #A855A8 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: lowercase;

  &:hover {
    background: linear-gradient(135deg, #7A3E7A 0%, #9333EA 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(139, 74, 139, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid #8B4A8B;
    outline-offset: 2px;
  }
`;

const ProductPrice = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: #333;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
`;

const ProductDescription = styled.p`
  font-size: 0.85rem;
  color: #666;
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
  border-radius: 16px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${({ $tagType }) =>
    $tagType == ProductTagType.FACE ? '#FCE4EC' :
      $tagType == ProductTagType.PROTECTION ? '#E3F2FD' :
        '#F3FDE3'};
  color: ${({ $tagType }) =>
    $tagType == ProductTagType.FACE ? '#C2185B' :
      $tagType == ProductTagType.PROTECTION ? '#1976D2' :
        '#5f7d2f'};
`;

export default ProductCard;