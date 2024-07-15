import React from 'react';
import logoImage from '../images/logo.png';
import poweredByImage from '../images/minhalogo.png'; // Certifique-se de que o caminho da imagem está correto

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between md:flex-wrap">
                <div className="mb-6 md:mb-0 md:w-1/2 lg:w-1/3">
                    <a href="https://cooperbam.com.br" className="flex items-center">
                        <img src={logoImage} className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-black">COOPERBAM</span>
                    </a>
                    <p className="text-sm text-black mt-2 text-left leading-tight" style={{ maxWidth: 'calc(100% - 2rem)' }}> {/* Adicione um estilo para limitar a largura do parágrafo */}
                        O Comércio de Bananas Laumar LTDA foi fundado em 1997, idealizada por José Lauro Pauli junto com seus filhos. Inicialmente, além de trabalhar com a fruta, a empresa também produzia arroz.
                    </p>
                </div>
                    <div className="md:w-1/2 lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            <div className="mb-4 text-black text-left"> {/* Adicionado text-left para alinhar à esquerda */}
                                <strong>Filial SC</strong><br />
                                (47) 3379-4946<br />
                                Rodovia SC 415, S/N – KM 86<br />
                                Massaranduba/SC<br />
                                <a href="mailto:laumar@bananaslaumar.com.br" className="hover:underline text-black">teste@.com.br</a>
                            </div>
                            <div className="mb-4 text-black text-left"> {/* Adicionado text-left para alinhar à esquerda */}
                                <strong>Filial PR</strong><br />
                                (41) 3348-5002<br />
                                Rodovia BR 116, 22881 Bloco 367/368<br />
                                Curitiba/PR<br />
                                <a href="mailto:laumar@bananaslaumar.com.br" className="hover:underline text-black">teste@.com.br</a>
                            </div>
                            <div className="mb-4 text-black text-left"> {/* Adicionado text-left para alinhar à esquerda */}
                                <strong>Filial SP</strong><br />
                                (17) 3512-9010<br />
                                Rua Jayme Miceli, nº 840<br />
                                São José do Rio Preto/SP<br />
                                <a href="mailto:laumar@bananaslaumar.com.br" className="hover:underline text-black">teste@.com.br</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <span className="text-sm text-black mb-4 sm:mb-0 dark:text-gray-400">
                    <span className="text-black">© 2024</span>{" "}
                    <a href="https://cooperbam.com.br" className="hover:underline text-black">Cooperbam™</a>.{" "}
                    <span className="text-black">Todos os direitos reservados.</span>
                </span>
                    <div className="flex mt-4 sm:mt-0">
                        <a href="#" className="text-black hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                {/* Ícone do Facebook */}
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-black hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                {/* Ícone do Discord */}
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-black hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                {/* Ícone do Twitter */}
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-black hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                {/* Ícone do GitHub */}
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <span className="text-sm text-black flex items-center dark:text-gray-400">
                        Powered by <img src={poweredByImage} className="h-4 ml-1" alt="Powered by MinhaLogo" />
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
