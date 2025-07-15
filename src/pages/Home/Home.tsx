import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';

function Home() {
  return (
    <>
      <Header/>
      {/* <Navigation /> */}
      <Carousel/>
      <ProductGrid />
      <Footer />
    </>
  );
}

export default Home;