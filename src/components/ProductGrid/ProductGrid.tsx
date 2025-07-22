import './ProductGrid.css';
import ProductCard from '../ProductCard/ProductCard';
import { useContext, useEffect, useState } from 'react';
import { CartProduct, useCartContext } from '../../context/CartContext';
import { SearchContext } from '../../context/SearchContext';
import { getProducts } from '../../services/productService';
import { IProduct } from '../../types/IProduct';

function ProductGrid() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const {
    cartProducts,
    addProduct,
    increaseQuantityProduct,
  } = useCartContext();
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { search } = useContext(SearchContext);

  useEffect(() => {
    getProducts()
      .then((data: IProduct[]) => {
        setProducts(data);
      })
      .catch((error: Error) => {
        console.error('Erro ao buscar produtos:', error);
      }
      );
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

  const handleBuyClick = (product: IProduct, event: React.MouseEvent) => {
    event.stopPropagation();
    const alreadyAdded = cartProducts.find((prevProduct) => prevProduct.id == product.id);
    if (alreadyAdded) {
      increaseQuantityProduct(alreadyAdded);
      return;
    } else {
      addProduct(product);
      return;
    }
  };

  return (
    <section className="product-grid-section">
      <div className="product-grid-container">
        <h2 className="product-grid-title">{title}</h2>
        {filteredProducts.length > 0 ?
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
          :
          <div>
            <p className="product-not-found-text">Nenhum produto encontrado</p>
          </div>
        }
      </div>
    </section>
  );
}

export default ProductGrid;