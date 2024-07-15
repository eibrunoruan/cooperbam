import React from 'react';
import WhatsAppIconImage from './whatsapp.png'; // Importe a imagem usando a sintaxe do módulo

const WhatsAppIcon = () => {
    const handleClick = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=47984731079';
        // Substitua SEU_NUMERO_DE_TELEFONE_AQUI pelo número de telefone ou link do WhatsApp desejado
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px', // Ajuste a posição conforme necessário
                right: '20px', // Ajuste a posição conforme necessário
                cursor: 'pointer',
                zIndex: '1000' // Para garantir que o ícone fique acima de outros elementos
            }}
            onClick={handleClick}
        >
            <img
                src={WhatsAppIconImage}
                alt="WhatsApp Icon"
                style={{
                    width: '60px', // Ajuste o tamanho do ícone conforme necessário
                    height: 'auto' // Manter a proporção da imagem
                }}
            />
        </div>
    );
};

export default WhatsAppIcon;
