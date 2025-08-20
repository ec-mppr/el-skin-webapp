import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { CartProduct } from 'types/ICartProduct';
import productService from '../../services/productService';
import { IProduct } from '../../types/IProduct';
import { useSearch } from 'hooks/useSearch';
import { useCart } from 'hooks/useCart';
import styled from 'styled-components';
import { useProducts } from 'hooks/useProducts';
import { useGetProductsQuery } from 'store/api/apiSlice';

function ProductGrid() {
  const { items, addItem, updateQuantity } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { term } = useSearch();
  const { products, loadProducts } = useProducts();
  const { data: dataProducts = [], isLoading: isLoadingProducts, error: errorProducts } = useGetProductsQuery();

  useEffect(() => {
    if (products.length === 0) {
      loadProducts();
    }
  }, [products.length, loadProducts]);

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
        {isLoadingProducts && <h2>Carregando produtos</h2>}
        {errorProducts && <h2> Erro ao carregar produtos</h2>}
        {filteredProducts.length > 0 && !isLoadingProducts && !errorProducts &&
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
        }
        {filteredProducts.length == 0 && !isLoadingProducts && !errorProducts &&
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
  background-color: ${props => props.theme.colors.background.white};
`;

const ProductGridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductGridTitle = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSize['2xl']};
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
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
  font-size: ${props => props.theme.fontSize['2xl']};
`;

export default ProductGrid;