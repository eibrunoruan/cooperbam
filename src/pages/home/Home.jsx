import React from 'react';
//import Ask from '../../components/ask/ask'
import Reviews from '../../components/review/review'
// import Teste from '../../components/homeBanner/Teste';
import HomeBanner from '../../components/home/homebanner';
import Galeria from '../../components/examplos/galeria'
import Empresa from '../../components/examplos/projetoseempresa';

function Home() {
  return (
    <div className="Home">
    
      {/* <Teste /> */}
      <HomeBanner />
      <Galeria />
      <Empresa />
      {/* <Ask /> */}
      <Reviews />
    </div>
  );
}

export default Home;
