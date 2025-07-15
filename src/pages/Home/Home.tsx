import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

function Home() {
  return (
    <>
      <Header/>
      <Banner />
      <Carousel/>
      <ProductGrid />
      <Footer />
    </>
  );
}

export default Home;