// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Define onde o Tailwind CSS deve procurar por classes
  theme: {
    extend: {
      // Aqui você pode estender ou substituir as configurações padrão do tema do Tailwind
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
    // Exemplo: require('@tailwindcss/forms'),
  ],
};
