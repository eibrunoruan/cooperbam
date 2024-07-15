import React from 'react';

const Contato = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: 'black' }}>Fale Conosco</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium" style={{ color: 'black' }}>Nome Completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#254a2b] focus:ring-[#254a2b]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium" style={{ color: 'black' }}>Endereço de E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#254a2b] focus:ring-[#254a2b]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium" style={{ color: 'black' }}>Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#254a2b] focus:ring-[#254a2b]"
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  id="copy"
                  name="copy"
                  type="checkbox"
                  className="h-4 w-4 text-[#254a2b] focus:ring-[#254a2b] border-gray-300 rounded"
                />
                <label htmlFor="copy" className="ml-2 block text-sm" style={{ color: 'black' }}>Deseja uma cópia da sua mensagem?</label>
              </div>
              <button
                type="submit"
                style={{ backgroundColor: '#254a2b', color: 'white' }} // Estilo do botão
                className="w-full py-2 px-4 rounded-md hover:bg-[#1e3a1b] focus:outline-none focus:ring-2 focus:ring-[#254a2b] focus:ring-opacity-50 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
          <div className="md:w-1/2 p-8 bg-gray-200">
            <div className="relative h-[300px] overflow-hidden bg-cover bg-center bg-no-repeat">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d<algum_dado>!2d-48.8934209!3d-26.5837402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0xdc166187366e4bf6!2sCooperbam!5e0!3m2!1spt-BR!2sbr!4v<algum_tempo>!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
