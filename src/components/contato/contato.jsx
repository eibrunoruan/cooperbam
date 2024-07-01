import React from 'react';
import minhaImagem from '../banners/img1.webp';

export default function Contato() {
  const enviarMensagem = (event) => {
    event.preventDefault();

    // Obter os valores dos campos
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const message = event.target.elements.message.value;

    // Formatar a mensagem para enviar via WhatsApp
    const mensagemWhatsapp = `Olá, me chamo ${firstName} ${lastName}. ${message}`;

    // Número de telefone para enviar a mensagem (substitua pelo seu número)
    const numeroWhatsapp = 'SEU_NUMERO_DE_TELEFONE_AQUI';

    // Montar o link do WhatsApp com a mensagem
    const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemWhatsapp)}`;

    // Redirecionar para o link do WhatsApp
    window.location.href = linkWhatsapp;
  };

  return (
    <div className="relative">
      <img
        src={minhaImagem}
        style={{
          filter: 'grayscale(100%) sepia(50%) hue-rotate(85deg) saturate(150%)',
          height: '400px', // Altura ajustada conforme sua solicitação
          objectPosition: 'bottom', // Imagem posicionada na parte inferior
        }}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Minha Imagem"
      />
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                  Cooperativa de Famílias Rurais de Massaranduba <br className="hidden md:block" />
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-800 md:text-lg">
                  Somos uma cooperativa comprometida com o desenvolvimento sustentável das famílias rurais de Massaranduba. Estamos aqui para apoiar e fortalecer nossa comunidade através da agricultura familiar.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Saiba mais
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Envie-nos uma mensagem
                </h3>
                <form onSubmit={enviarMensagem}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Nome
                    </label>
                    <input
                      placeholder="Seu nome"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Sobrenome
                    </label>
                    <input
                      placeholder="Seu sobrenome"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="message"
                      className="inline-block mb-1 font-medium"
                    >
                      Mensagem
                    </label>
                    <textarea
                      placeholder="Sua mensagem..."
                      required
                      rows="4"
                      className="flex-grow w-full px-4 py-2 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-900 focus:shadow-outline focus:outline-none"
                    >
                      Confirmar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
