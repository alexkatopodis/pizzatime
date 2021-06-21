import styled from 'styled-components';
import FeaturePic from '../../images/featured2.jpg';

export const HomeContainer = styled.div`
  width: 100%;
  /* max-width: 1120px; */
  padding: 50px;
  height: 100vh;
  margin: auto auto;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${FeaturePic});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
@media (min-height: 478px) and (max-width: 478px) {
  
  width: 100vh;
}
  
`;


export const FormSection = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
  color: #f9f9f9;
  padding: 50px;

  img {
   
    @media (max-width: 478px) {
    margin-left: 20px;    
  }
      
  }
 
`;

export const Form = styled.form`
  margin-top: 60px;
 
`; 

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;

  @media (max-width: 478px) {
    margin-bottom: 20px;
    margin-left: -50px;
    
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #ffc500;
  line-height: 32px;
  margin-bottom: 50px;

  @media (max-width: 478px) {
    margin-bottom: -10px;
    margin-left: -50px;
    
  }
`;