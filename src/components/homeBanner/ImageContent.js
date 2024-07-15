import React, { useState } from 'react';

function ImageContent({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section
      style={{ backgroundImage: `url(${currentImage.backgroundImage})`, height: '450px' }} // Define a altura fixa para 400px
      className="relative bg-cover bg-center bg-no-repeat"
    >
      {/* Blur e overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 backdrop-filter backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold">
            {currentImage.title && (
              <strong className="block font-extrabold" style={{ color: '#8eca41' }}>{currentImage.title}</strong>
            )}
          </h1>

          {currentImage.description && (
            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              {currentImage.description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            {currentImage.buttonText1 && (
              <a
                href="#"
                className="block w-full rounded"
                style={{
                  backgroundColor: '#8eca41',
                  color: 'white',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                {currentImage.buttonText1}
              </a>
            )}

            {currentImage.buttonText2 && (
              <a
                href="#"
                className="block w-full rounded"
                style={{
                  backgroundColor: 'white',
                  color: '#254a2b',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  textDecoration: 'none',
                }}
              >
                {currentImage.buttonText2}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Controles do Carrossel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          className="text-white rounded-full bg-gray-900/50 hover:bg-gray-900/75 focus:outline-none focus:ring p-2"
          onClick={handlePrevImage}
        >
          &#8592;
        </button>
        <button
          className="text-white rounded-full bg-gray-900/50 hover:bg-gray-900/75 focus:outline-none focus:ring p-2"
          onClick={handleNextImage}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default ImageContent;
