import React from 'react'
import { PastaContainer, 
      PastaContent, 
      PastaItems, 
      PastaH1, 
      PastaCard, 
      PastaLeft,
      PastaRight,
      PastaBtn,
    } from './PastaElements'


export default function Pasta() {
    return (
        <PastaContainer>
            
           <PastaContent>
             <PastaItems>
               <PastaH1>Pizza St<span>oo</span> m</PastaH1>                                   
             </PastaItems>
             <PastaCard>
                <PastaLeft/>
                <PastaRight/>
            </PastaCard>             
           <PastaBtn href='/Filling'>Próximo</PastaBtn>             
           </PastaContent>

        </PastaContainer>
    );
};