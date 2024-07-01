import React from 'react';
import bananaImage from '../images/banana.png';

const Error404 = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center justify-center">
      <div className="container flex flex-col md:flex-row items-center justify-center text-gray-700">
        <div className="w-full lg:w-1/2 mx-8 text-center md:text-left">
          <div className="text-7xl text-yellow-500 font-dark font-extrabold mb-8">Ops...</div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Desculpa, mas parece que ocorreu algum erro.
          </p>
          
          <a href="/" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-yellow-500 active:bg-red-600 hover:bg-red-700">Página Inicial</a>
        </div>
        <div className="w-full lg:flex lg:justify-center lg:w-1/2 mx-5 my-12">
          <img src={bananaImage} alt="Page not found" />
        </div>
      </div>
    </div>
  );
}

export default Error404;
