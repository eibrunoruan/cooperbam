import React, { useState } from 'react';

const Empresa = () => {
  const [content, setContent] = useState({
    team: "1 equipe.",
    years: "10+ anos.",
    projects: "20+ afiliados.",
    description: "Uma Cooperativa formada por famílias, que desejam crescer e evoluir com prosperidade e confiem na Cooperbam, para alcançar tal objetivo.",
    logos: [
      "https://i.ibb.co/g3M9nm7/3.png",
      "https://i.ibb.co/rtMq0zc/2.png",
      "https://i.ibb.co/bK4GkW8/1.png",
      "https://i.ibb.co/g3M9nm7/3.png",
      "https://i.ibb.co/rtMq0zc/2.png",
      "https://i.ibb.co/bK4GkW8/1.png",
      "https://i.ibb.co/rtMq0zc/2.png",
      "https://i.ibb.co/g3M9nm7/3.png",
    ]
  });

  const handleChange = (key, value) => {
    setContent(prevContent => ({ ...prevContent, [key]: value }));
  };

  return (
    <section className="py-6 bg-gray-100 sm:py-10 lg:py-16">
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-8 gap-y-8">
          <div className="lg:col-span-2 text-left">
            <h2 className="text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl lg:leading-tight">
              <span className="text-[#254a2b]">1</span> equipe.<br />
              <span className="text-[#254a2b]">10+</span> anos.<br />
              <span className="text-[#254a2b]">20+</span> afiliados.<br />
            </h2>
            <p className="mt-4 text-base text-black">
              {content.description}
            </p>
          </div>
          <div className="lg:col-span-3 xl:col-span-4">
            <div className="grid items-center max-w-3xl grid-cols-2 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
              {content.logos.map((logo, index) => (
                <div key={index} className={`${index < 4 ? 'block md:hidden' : 'hidden md:block'}`}>
                  <img className="object-contain h-12 sm:h-16 mx-auto" src={logo} alt={`Logo ${index + 1}`} />
                </div>
              ))}
              {/* Para exibir todas as imagens em telas maiores */}
              {content.logos.map((logo, index) => (
                <div key={index} className="hidden md:block">
                  <img className="object-contain h-12 sm:h-16 mx-auto" src={logo} alt={`Logo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Empresa;
