import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { CartProduct } from 'types/ICartProduct';
import productService from '../../services/productService';
import { IProduct } from '../../types/IProduct';
import { useSearch } from 'hooks/useSearch';
import { useCart } from 'hooks/useCart';
import styled from 'styled-components';

function ProductGrid() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { items, addItem, updateQuantity } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { term } = useSearch();

  useEffect(() => {
    productService.getProducts()
      .then((data: IProduct[]) => {
        setProducts(data);
      })
      .catch((error: Error) => {
        console.error('Erro ao buscar produtos:', error);
      }
      );
  }, []);

  useEffect(() => {
    if (term) {
      setFilteredProducts(products.filter(product =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
      ));
    } else {
      setFilteredProducts([...products]);
    }
  }, [term, products]);

  const title = 'nossos queridinhos estão aqui';

  const handleProductClick = (productId: string) => {
    console.log(`Produto clicado: ${productId}`);
  };

  const handleBuyClick = (productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const productToBuy = products.find((prevProduct) => prevProduct.id == productId);

    if (!productToBuy) {
      console.error(`Produto com id ${productId} não encontrado`);
      return;
    }

    addItem(productToBuy);
  };

  return (
    <ProductGridSection>
      <ProductGridContainer>
        <ProductGridTitle>{title}</ProductGridTitle>
        {filteredProducts.length > 0 ?
          <StyledProductGrid>
            {filteredProducts.map((product) => (
              <div key={product.id} data-testid="product-card-grid"
              >
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                  onBuyClick={handleBuyClick}
                />
              </div>
            ))}
          </StyledProductGrid>
          :
          <div>
            <ProductNotFoundText>Nenhum produto encontrado</ProductNotFoundText>
          </div>
        }
      </ProductGridContainer>
    </ProductGridSection>
  );
}

const ProductGridSection = styled.section`
  padding: 60px 20px;
  background-color: #ffffff;
`;

const ProductGridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductGridTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;
  font-family: 'Arial', sans-serif;
`;

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  justify-items: center;
`;

const ProductNotFoundText = styled.p`
  text-align: center;
  font-size: 24px;
`;

export default ProductGrid;