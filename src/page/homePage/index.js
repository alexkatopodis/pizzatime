import React from 'react'
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import { productData } from '../../components/Products/data';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';

const Home = () => {
    return (
      <>
      <Hero />
      <Products heading='Mais Pedidas' data={productData} />
      <Feature />      
      <Footer /> 
      </>
    );
  };
  
  export default Home;
  
