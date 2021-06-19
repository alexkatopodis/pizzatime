import styled from 'styled-components';
import ImgBg from '../../../images/pizza-1.jpg';

export const SizeContainer = styled.div`
 background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const SizeContent = styled.div`
  height: 100vh;
  max-height: 100%;
  padding: 2rem calc((100vw - 1300px) / 2);
`;

export const SizeItems = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 20vh;
  max-height: 100%;
  padding: 2rem 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const SizeH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;

  span{
    color: #e9ba23;
    letter-spacing: -9px;

    @media (min-width: 478px) {
      letter-spacing: -19px;
    }
        
   }
`;

export const SizeCard = styled.div`
  background-color: rgba(249,249,249,0.2);
  border-radius: 10px;
  align-self: center;
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px ;
  padding: 10px 20px;
  height: 60vh;  
  /* padding: 5rem calc((100vw - 1200px) / 2); */
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  

  @media (max-width: 478px) {
    margin: 5px ;  
    font-size: 14px;  
  
    }
  
    
`;

export const SizeBtn = styled.a`
flex-direction: row;  
  margin: 10px;
  height: 50px;
  justify-content: center;
  font-size: 1.4rem;
  padding: 1rem 3rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  text-decoration: none;
  float: right;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const SizeLeft = styled.div`
background-color:red;
flex: 0.5;

`;
export const SizeRight = styled.div`
background-color:yellow;
flex: 0.5;
`;