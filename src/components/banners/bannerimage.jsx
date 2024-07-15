import React, { useState, useEffect } from 'react';
import img1 from './img1.webp';
import img2 from './img2.jpg';

function BannerImage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

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

    useEffect(() => {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentImage = images[currentIndex];

    return (
        <section className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${currentImage.src})` }}>
            <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className={`text-3xl font-extrabold text-white sm:text-5xl ${imagesLoaded ? 'block sm:hidden' : 'hidden'}`}>
                        {currentImage.headerText}
                        <strong className="block font-extrabold text-rose-500"> Forever Home. </strong>
                    </h1>

                    <p className={`mt-4 max-w-lg text-white sm:text-xl/relaxed ${imagesLoaded ? 'block sm:hidden' : 'hidden'}`}>
                        {currentImage.paragraphText}
                    </p>

                    <div className={`mt-8 flex flex-wrap gap-4 text-center justify-end ${imagesLoaded ? 'block sm:hidden' : 'hidden'}`}>
                        {imagesLoaded && (
                            <a
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                {currentImage.buttonText}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <button
                type="button"
                className="absolute inset-y-0 left-0 flex items-center justify-center w-12 h-full text-gray-800 hover:bg-gray-800/10 rounded-l-lg dark:text-white dark:hover:bg-white/10 transition-opacity duration-2000"
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
                className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-full text-gray-800 hover:bg-gray-800/10 rounded-r-lg dark:text-white dark:hover:bg-white/10 transition-opacity duration-2000"
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
        </section>
    );
}

export default BannerImage;
