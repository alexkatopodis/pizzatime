import React from 'react'
import { SizeContainer, 
      SizeContent, 
      SizeItems, 
      SizeH1, 
      SizeCard, 
      SizeLeft,
      SizeRight,
      SizeBtn,
    } from './SizeElements'


export default function Size() {
    return (
        <SizeContainer>
            
           <SizeContent>
             <SizeItems>
               <SizeH1>Pizza St<span>oo</span> m</SizeH1>                                   
             </SizeItems>
             <SizeCard>
                <SizeLeft/>
                <SizeRight/>
            </SizeCard>             
           <SizeBtn href='/Pasta'>Próximo</SizeBtn>             
           </SizeContent>

        </SizeContainer>
    );
};
