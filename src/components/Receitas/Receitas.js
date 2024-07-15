import React from 'react';
import cooperImage from './banana.png'; // ajuste o caminho conforme necessário

const Receitas = () => {
    return (
        <section style={{ backgroundColor: '#f5f5dc' }} className="dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl" style={{ color: '#254a2a' }}>Cooperbam</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" style={{ color: '#000000' }}>A Cooperbam apoia agricultores familiares de Massaranduba, destacando-se na produção sustentável de bananas.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" style={{ backgroundColor: '#264a2b' }}>
                    Nossa história
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-264a2b hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-gray-900 dark:border-gray-700 dark:hover:bg-264a2b dark:hover:text-white dark:focus:ring-gray-800" style={{ color: '#000000' }}>
                    Contato
                    </a> 
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={cooperImage} alt="mockup" />
                </div>                
            </div>
        </section>
    );
}

export default Receitas;
