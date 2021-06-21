import styled from 'styled-components';
import FeaturePic from '../../images/featured2.jpg';

export const Details = styled.section`
  width: 400px; 


  /* &:  p {
    margin-bottom: 40px;
    margin-top: 10px;
    color: #737380;
    font-size: 17px;
  }

  &:  h1 {
    font-size: 22px;
  } */
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
`;