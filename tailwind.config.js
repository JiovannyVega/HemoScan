/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Colores claros */
        primary: '#284B63',
        secondary: '#3C6E71',
        background: '#FFFFFF',
        text: '#353535',
        border: '#D9D9D9',
        hover: '#D9D9D9',
        secondarybckgrnd: '#f3f3f3',

        /* Colores oscuros */
        'primary-dark': '#284B63',
        'secondary-dark': '#3C6E71',
        'background-dark': '#353535',
        'text-dark': '#FFFFFF',
        'border-dark': '#444',
        'hover-dark': '#999999',
        'secondarybckgrnd-dark': '#222',

        'toggle-on': '#284B63',
        'toggle-off': '#d1d5db',
      }
    },
  },
  plugins: [],
}