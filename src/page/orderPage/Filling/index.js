import React from 'react'
import { FillingContainer, 
      FillingContent, 
      FillingItems, 
      FillingH1, 
      FillingCard, 
      FillingLeft,
      FillingRight,
      FillingBtn,
    } from './FillingElements'


export default function Filling() {
    return (
        <FillingContainer>
            
           <FillingContent>
             <FillingItems>
               <FillingH1>Pizza St<span>oo</span> m</FillingH1>                                   
             </FillingItems>
             <FillingCard>
                <FillingLeft/>
                <FillingRight/>
            </FillingCard>             
           <FillingBtn href='/'>Fechar</FillingBtn>             
           </FillingContent>

        </FillingContainer>
    );
};
