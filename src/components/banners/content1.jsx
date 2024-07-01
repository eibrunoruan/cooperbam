import React from 'react';

const SectionWithImage = ({ order, title, imageUrl, description }) => {
    const imagePositionClass = order === 'left' ? 'order-1' : 'order-2';

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                <div className={`sm:hidden lg:block lg:max-w-xl ${imagePositionClass}`}>
                    <img src={imageUrl} className="rounded-lg" alt="" />
                </div>
                <div className={`mt-6 gap-12 sm:mt-0 md:flex lg:block ${order === 'left' ? 'order-2' : 'order-1'}`}>
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            {title}
                        </h3>
                        <p className="mt-3 max-w-xl">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContentSections = () => {
    // Função para editar o conteúdo facilmente
    const editContent = (order, title, imageUrl, description) => {
        return (
            <SectionWithImage
                order={order}
                title={title}
                imageUrl={imageUrl}
                description={description}
            />
        );
    };

    return (
        <>
            {editContent('left', 'We do our best to make customers always happy', 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.')}
            {editContent('right', 'Another section title', 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Another section content goes here.')}
            {editContent('left', 'Yet another section title', 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Yet another section content goes here.')}
        </>
    );
};

export default ContentSections;
