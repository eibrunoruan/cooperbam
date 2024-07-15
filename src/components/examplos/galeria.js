import React from 'react';

const Galeria = () => {
  const images = [
    "https://i.ibb.co/rv3szWS/1.jpg",
    "https://i.ibb.co/D9hRJLr/2.webp",
    "https://i.ibb.co/VYtxZ0s/3.jpg",
    "https://i.ibb.co/KKQmDX1/4.webp",
    "https://i.ibb.co/rQDxYRZ/5.webp",
    "https://i.ibb.co/BVZKnZZ/6.jpg",
    "https://i.ibb.co/VB3HDzV/7.jpg",
    "https://i.ibb.co/QdyWFNs/8.webp"
  ];

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <header className="text-center my-4">
        <h1 className="text-2xl font-bold" style={{ color: '#eecb43', marginBottom: '-0.5rem' }}>SOBRE A</h1>
        <h2 className="text-5xl font-bold text-green-800 mt-0">COOPERBAM</h2>
        <p className="text-md text-gray-700 mt-2">
          A busca pelo constante crescimento do associado,
          <br />
          essa é nossa filosofia.
        </p>
      </header>
      <div className="flex flex-wrap -mx-1">
        {images.map((src, index) => (
          <div key={index} className="flex w-1/2 sm:w-1/3 md:w-1/4 px-1 my-1">
            <img
              alt={`gallery ${index}`}
              className="block h-48 w-full object-cover object-center"
              src={src}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap -mx-1">
        <div className="flex w-full px-1 my-1">
          <img
            alt="gallery large"
            className="block h-64 w-full object-cover object-center" // Altura aumentada
            src={images[7]}
          />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
