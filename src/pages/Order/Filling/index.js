import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import swal from 'sweetalert';

import FormContainer from '../../../componentsOrder/FormContainer';
import PrimaryButton from '../../../componentsOrder/PrimaryButton';
import OrderItems from '../../../componentsOrder/OrderItems';
import { Select, HomeContainer } from './styles';

import api from '../../../services/api';

export default function Filling() {
  const [pasta, setPasta] = useState('');
  const [size, setSize] = useState('');
  const [filling, setFilling] = useState('');  
  const [id, setId] = useState('');
  const [listFilling, setListFilling] = useState('');

  const history = useHistory();

  function handleChange(e) {
    e.preventDefault();

    const value = e.target.value;
    setFilling(value);
   
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (filling !== '' && filling !== 'Escolha um recheio') {
      
      if(filling === 'Portuguesa'){
        const points = localStorage.getItem('points');
        const newPoints = parseInt(points) + 10 ;
        localStorage.setItem('points', newPoints);
      }
      await api.post('orders', {
        data: {
          pasta: pasta,
          size: size,
          filling: filling, 
        }
      }).then(response => {
        if (response.data.id) {
          history.push({
            pathname: 'Complete',
            idOrder: response.data.id
          });
        }
      });
    } else {
      swal({
        title: 'Ops',
        text: 'A escolha de um recheio é obrigatória',
        icon: 'error'
      });
    }
  }

  useEffect(() => {
    setPasta(history.location.pasta);
    setSize(history.location.size);

    if (listFilling === '') {
      api.get('filling')
      .then(response => {
        setListFilling(response.data);
        
        response.data.forEach(value => {
          if (value.isSuggest === true) {
            swal({
              title: 'Temos uma recomendação',
              text: `Se você escolher o sabor ${value.description}, separamos um brinde pra você!`,
              icon: 'info'
            });
          }
        })
      });
    }
  });

  return (

    <HomeContainer>
    <FormContainer title="Novo pedido" description="Agora precisamos que você nos diga quais os detalhes do pedido.">
      <form>
        <OrderItems title="Massa:" description={pasta} />
        <OrderItems title="Tamanho:" description={size} />

        <Select onChange={e => handleChange(e)}>
          <option>Escolha um recheio</option>
          {listFilling && listFilling.map(value => (
          <option value={value.description} key={value.id}>{value.description}</option>
        ))}
        </Select>
        <PrimaryButton title="Concluir o pedido" onClick={e => handleSubmit(e)} />
      </form>
    </FormContainer>
    </HomeContainer>
  );
}