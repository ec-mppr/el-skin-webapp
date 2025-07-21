import './ProductGrid.css';
import ProductCard, { IProduct } from '../ProductCard/ProductCard';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CartProduct, useCartContext } from '../../context/CartContext';
import { SearchContext } from '../../context/SearchContext';

function ProductGrid() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const  { cartProducts, setCartProducts } = useCartContext();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { search } = useContext(SearchContext);
  
  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    if (search) {
      setFilteredProducts(products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      ));
    } else {
      setFilteredProducts([...products]);
    }
  }, [search, products]);

  const title = 'nossos queridinhos estão aqui';

  const handleProductClick = (productId: string) => {
    console.log(`Produto clicado: ${productId}`);
  };

  const handleBuyClick = (productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const addedItem = { id: productId } as CartProduct;
    setCartProducts([...cartProducts, addedItem]);
  };

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <h2 className="product-grid-title">{title}</h2>

        <div className="product-grid">
          {filteredProducts.map((product) => (
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