import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 100px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }

  @media (max-width: 478px) {
  
    margin-left: -20px;
    font-size: 14px;
        
  }
`;

export const Icon = styled.div`
  margin-left: 10px;
  height: 15px;
`;