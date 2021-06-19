import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer id="feature">
      <h1>Promoção do Dia!</h1>
      <p>Na compra de Uma Catupiry, ganhe 10 pontos</p>
      <FeatureButton href='/Size'>Peça Agora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
