import React, { Component } from 'react';
import { ContainerCover } from './styles';
import cover from '../../images/pizza-online.png';

class Cover extends Component {
  render() {
    return(
      <ContainerCover>
        <img src={cover} width="700" alt="Pizza Web" />
      </ContainerCover>
    ); 
  }
}

export default Cover;