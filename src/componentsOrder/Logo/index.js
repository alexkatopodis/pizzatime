import React, { Component } from 'react';

import logo from '../../images/logo.png';
import { LogoContainer } from './styles';

class Logo extends Component {
  render() {
    return(
      <LogoContainer>
        <img src={logo} width={this.props.width} alt="Pizza Web" />
      </LogoContainer>
    ); 
  }
}

export default Logo;