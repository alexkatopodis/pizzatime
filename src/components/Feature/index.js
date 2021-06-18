import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Promoção do Dia!</h1>
      <p>Na compra de Uma Catupiry, ganhe 10 pontos</p>
      <FeatureButton>Peça Agora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
