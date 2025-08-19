import React from 'react';
import Banner from 'components/Banner/Banner';
import Layout from 'components/Layout';
import Carousel from 'components/Carousel/Carousel';
import ProductGrid from 'components/ProductGrid/ProductGrid';

function App() {
  return (
    <Layout>
      <Banner />
      <Carousel />
      <ProductGrid />
    </Layout>
  );
}

export default App;