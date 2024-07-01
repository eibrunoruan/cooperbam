import React from 'react';
import Componente1 from '../../components/banners/estruturas/componente1'
import Componente3 from '../../components/banners/estruturas/componente3'
import Componente4 from '../../components/banners/estruturas/componente4'
import Contato from '../../components/contato/contato'


function Estrutura() {
  return (
    <div className="Estrutura">
        <Componente3 />
        <Componente1 />
        <Componente4 />
        <Contato />
    </div>
  );
}

export default Estrutura;
