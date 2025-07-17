import './ProductGrid.css';
import ProductCard, { IProduct } from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductGrid() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const title = 'nossos queridinhos estão aqui';

  const handleProductClick = (productId: string) => {
    console.log(`Produto clicado: ${productId}`);
  };

  const handleBuyClick = (productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Comprar produto: ${productId}`);
  };

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <h2 className="product-grid-title">{title}</h2>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
              onBuyClick={handleBuyClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;