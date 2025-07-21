import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Banner from '../../components/Banner/Banner';

function Home() {
  return (
    <>
      <Banner />
      <Carousel/>
      <ProductGrid />
    </>
  );
}

export default Home;