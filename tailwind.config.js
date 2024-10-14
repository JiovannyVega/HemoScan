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
                primary: "#3490dc",
                rico: "#000000",
                danger: "#e3342f",
                'toggle-on': '#284B63',
                'toggle-off': '#d1d5db',
            }
        },
    },
    plugins: [],
}