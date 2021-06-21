import React, {useEffect} from 'react'
import Hero from '../../components/Hero';
import Products from '../../components/Products';
import { productData } from '../../components/Products/data';
import Feature from '../../components/Feature';
import Footer from '../../components/Footer';

const Home = () => {


  useEffect(() => {
    const filling = localStorage.getItem('points')
    if (!filling) localStorage.setItem('points', 0);   
  }, []);
  
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
  
