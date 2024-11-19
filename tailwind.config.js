const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vermelho: {
          claro: '#ff0400',
          escuro: '#A41715',
          hover: '#40080A'
        },
        preto: {
          escuro: '#070B0D',
          claro: '#242424',
          before: '#212020A0',
          transparente: '#00000062',
          coverTrailer: '#00000021',
        },
        cinza: {
          escuro: '#41494F',
          claro: '#6D7C83',
          transparente: '#6d7c837c'
        }
      },
      screens: {
        'custom-tab': { 'raw': '(max-width: 1100px) and (min-height: 1000px)' },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        gotham: ['Gotham', "sans-serif"],
        gothamBold: ['Gotham-Bold', "sans-serif"],
        mantika: ['Mantika-Regular', "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.before-overlay': {
          position: 'relative',
        },

        '.before-overlay::before': {
          content: '""', 
          position: 'absolute',
          display: 'block',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: '.7',
          backgroundColor: 'black', 
          zIndex: 1,
        },

        '.before-overlay::after': {
          content: '""', 
          position: 'absolute',
          display: 'block',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: '.4',
          backgroundColor: 'black', 
          background: 'rgb(40,39,39)',
          background: 'linear-gradient(0deg, rgba(40,39,39,0.07244616596638653) 0%, rgba(0,0,0,1) 96%)',
          zIndex: 1,
        },



      };
      addUtilities(newUtilities, ['before']);
    }),
  ],
}