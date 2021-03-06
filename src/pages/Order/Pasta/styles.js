import styled from 'styled-components';
import FeaturePic from '../../../images/featured2.jpg';



export const Select = styled.select`
   margin-top: 50px;
  margin-bottom: 100px;  
`;

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
  
  font-size: 5px;
  padding: 10px;
  
}
`;