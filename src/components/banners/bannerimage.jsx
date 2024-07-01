import React, { useState, useEffect } from 'react';
import img1 from './img1.webp';
import img2 from './img2.jpg';

function BannerImage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false); // Estado para controlar o carregamento das imagens

    const images = [
        { src: img1, headerText: "Contribuindo há 13 anos", paragraphText: "para a agricultura familiar de Massaranduba.", buttonText: "Venha se juntar a nós" },
        { src: img2, headerText: "Faz o L", paragraphText: "em apoio à comunidade de Massaranduba.", buttonText: "Saiba mais" },
        { src: img1, headerText: "Apoio à agricultura familiar", paragraphText: "para um futuro sustentável.", buttonText: "Explore agora" }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Verifica se todas as imagens foram carregadas
    useEffect(() => {
        const checkImagesLoaded = () => {
            const promises = images.map((image) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = image.src;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            Promise.all(promises)
                .then(() => {
                    setImagesLoaded(true);
                })
                .catch((error) => {
                    console.error('Erro ao carregar imagens:', error);
                });
        };

        checkImagesLoaded();
    }, [images]);

    // Autoplay setup
    useEffect(() => {
        const interval = setInterval(handleNext, 3000); // Altera os slides a cada 3 segundos
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    const currentImage = images[currentIndex];

    return (
        <div className="relative">
            <div className="relative overflow-hidden w-full h-96 bg-white rounded-lg">
                <div
                    className="absolute top-0 bottom-0 left-0 flex flex-nowrap transition-transform duration-700 w-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0 relative">
                            <img
                                src={image.src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-96 object-cover"
                                style={{
                                    height: '600px', // Definindo 600 pixels de altura
                                    visibility: imagesLoaded ? 'visible' : 'hidden' // Esconde a imagem até que esteja carregada
                                }}
                            />
                            <div className="absolute top-0 right-0 p-8 text-white bg-opacity-80">
                                <div className="max-w-md">
                                    <h1 className="mb-1 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                                        {image.headerText}
                                    </h1>
                                    <p className="mt-1 text-xl text-white relative">
                                        {image.paragraphText}
                                        <span className="absolute inset-0 bg-gradient-to-l from-transparent to-eeccb4 opacity-80 blur-lg transform origin-top-right -skew-x-12"></span>
                                    </p>
                                    <button className="btn btn-success mt-4 bg-yellow-500 text-white hover:bg-yellow-400">{image.buttonText}</button>
                                </div>
                            </div>
                            {/* Paralelogramo com blur */}
                            <div
                                className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent to-eeccb4 opacity-80 transform origin-top-right -skew-x-12 blur-lg"
                                style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Botões de navegação */}
            <button
                type="button"
                className="absolute inset-y-0 left-0 flex items-center justify-center w-12 h-full text-gray-800 hover:bg-gray-800/10 rounded-l-lg dark:text-white dark:hover:bg-white/10"
                onClick={handlePrev}
            >
                <span className="text-2xl" aria-hidden="true">
                    <svg
                        className="flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </span>
                <span className="sr-only">Anterior</span>
            </button>
            <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-gray-800 hover:bg-gray-800/10 rounded-r-lg dark:text-white dark:hover:bg-white/10"
                onClick={handleNext}
            >
                <span className="sr-only">Próximo</span>
                <span className="text-2xl" aria-hidden="true">
                    <svg
                        className="flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </span>
            </button> 

            {/* Indicadores de slide */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block w-3 h-3 rounded-full cursor-pointer ${
                            index === currentIndex ? 'bg-yellow-500 border-yellow-500' : 'bg-gray-400 border-gray-400'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
            {/* Fim dos indicadores de slide */}
        </div>
    );
}

export default BannerImage;
