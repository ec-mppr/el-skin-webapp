import './ProductGrid.css';
import ProductCard, { IProduct } from '../ProductCard/ProductCard';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../../context/cartContext';

function ProductGrid() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState(useContext(CartContext));
  // const [cart, setCart] = useContext(Cart)

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
    setCart({ cartProducts: [...cart.cartProducts, productId] });
    console.log(`Comprar produto: ${productId}`);
    console.log(cart);
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