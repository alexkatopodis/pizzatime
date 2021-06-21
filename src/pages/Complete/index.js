import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FormContainer from '../../componentsOrder/FormContainer';
import PrimaryButton from '../../componentsOrder/PrimaryButton';
import OrderItems from '../../componentsOrder/OrderItems';

import { Details, HomeContainer} from './styles';

import api from '../../services/api';

export default function ChooseFilling() {
  const [id, setId] = useState('');
  const [order, setOrder] = useState('');
  const [points, setPoints] = useState('');
  const [body, setBody] = useState('');

  const history = useHistory();

  useEffect(() => {
    setId(history.location.idOrder);
    
    if (order === '') {
        api.get('orders', {
            params: {
                id: id
            }
        })
        .then(response => {
            setOrder(response.data[0]);
        })
    }
  });

  
  useEffect(() => {
    const fillingPoints = localStorage.getItem('points')
    if (fillingPoints) setPoints(fillingPoints);
  }, [points]);

  useEffect(() => {
     if(order) {
         setTimeout(() => {
             setBody(showBody())
         }, 1000)
     }
  }, [order]);

  function handleRedirect(e) { 
      e.preventDefault();

      history.push('/');
  }

  let pasta, size, filling;
  if (order) {
      console.log(order.data);
    pasta = (
        <OrderItems title="Massa:" description={order.data.pasta} />
    );
    size = (
        <OrderItems title="Tamanho:" description={order.data.size} />
    );
    filling = (
        <OrderItems title="Recheio:" description={order.data.filling} />
    );
    
  }
  
  const showBody = () => {
      return(
            <>
            {pasta} 
            {size}
            {filling}
            {order && order.data.filling === 'Portuguesa' ? <h1>{`Parabéns , Você Ganhou : ${points} pontos`}</h1> : null }
            </>
      )
  }

  return  (
      <HomeContainer>
    <FormContainer title="Pedido realizado com sucesso" description="Esperamos que goste e volte a pedir conosco novamente." cancel={false} >
    <Details>
       {body !== '' ? body : <h1>Carregando seu Pedido...</h1>}
        <PrimaryButton title="Começar de novo" type="submit" onClick={e => handleRedirect(e)} />
    </Details>
</FormContainer>
</HomeContainer>
  );
}