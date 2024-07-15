import React from 'react';
import ImageContent from './ImageContent';
import poxaImage from '../../components/homeBanner/img1.webp';
import outraImagem from '../../components/homeBanner/quale.jpg';

function Teste() {
  const images = [
    {
      backgroundImage: poxaImage,
      title: 'Cooperativa dos Agricultores Familiares de Massaranduba',
      description: 'Com apoio da Epagri, cooperativa de Massaranduba inaugura unidade de processamento de bananas..',
      buttonText1: 'Leia Mais',
    },
    {
      backgroundImage: outraImagem,
      title: 'Título da Imagem 2',
      description: 'Descrição da Imagem 2',
      buttonText1: 'Botão 1',
    },
    // Adicione mais objetos conforme necessário para mais imagens
  ];

  return (
    <div>
      <ImageContent images={images} />
    </div>
  );
}

export default Teste;
