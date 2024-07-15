import React from "react";

const HomeBanner = () => {
    const content = {
        h1: {
            text: "Cooperativa dos Agricultores Cooperbam",
            strongText: "",
            color: "text-[#254929]" // Cor do texto ajustada para #254929
        },
        description: "Nossa missão é apoiar os agricultores familiares e promover a agricultura sustentável.",
        buttons: [
            {
                text: "Saiba mais",
                bgColor: "bg-[#254929]",
                hoverColor: "hover:bg-[#7a9e4e]",
                textColor: "text-white"
            }
        ]
    };

    return (
        <section className="relative h-[450px]">
            <div
                className="absolute inset-0 bg-[url(https://i.ibb.co/kmvF08Y/img1-3e5a71b656fc5d6e6fec-2.webp)] bg-cover bg-center bg-no-repeat transform scale-x-[-1] h-full w-full"
            ></div>
            {/* Branco com opacidade 25% para tablet e celular */}
            <div className="absolute inset-0 md:hidden bg-white/75 shadow-md"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
                <div className="max-w-xl text-left bg-white p-6 md:p-8" style={{ boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-[#254929]">
                        {content.h1.text}
                        <strong className="block font-extrabold text-[#254929]">{content.h1.strongText}</strong>
                    </h1>

                    <p className="mt-4 text-black">{content.description}</p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        {content.buttons.map((button, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`block w-full rounded ${button.bgColor} px-12 py-3 text-sm font-medium ${button.textColor} shadow ${button.hoverColor} focus:outline-none focus:ring active:bg-rose-500 sm:w-auto`}
                            >
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;
