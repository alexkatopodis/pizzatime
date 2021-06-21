import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  @media (max-width: 478px) {
    max-width: 150px;
    padding: 0px 5px;
    margin: -35px -15px;
    
  }
  
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 200px;
  margin-top: 40px;
  color: #333;
  font-size: 16px; 
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  
  

  & svg {
    margin-right: 10px;

        
  }

  @media (max-width: 478px) {
    width: 100px;
    margin-left: -30px;
        
  }
`;

export const Title = styled.h1`
  margin:  61px 0 32px;
  font-size: 32px;

  @media (max-width: 478px) {
    font-size: 24px;
    line-height: 24px;
    margin-left: -50px;
    margin-right: 40px;
    margin-top: 15px;
        
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;

  @media (max-width: 478px) {
    font-size: 14px;
    line-height: 24px;
    margin-left: -50px;
    margin-right: 40px;
        
  }
`;