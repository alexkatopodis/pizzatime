import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    
  }

  @media only screen and (min-width: 768px) {
   body{
       font-size: 16px;
   }
}

@media only screen and (min-width: 480px) and (min-width: 768px) {
    body{
        font-size: 15px;
    }
}

@media only screen and (min-width: 479px) {
    body{
        font-size: 14px;
    }
}

`;


