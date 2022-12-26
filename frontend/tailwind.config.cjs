/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#4C4FCE',
                'dark-blue': '#2C2D53',
                'red-error': '#FF0000',
            },
        },
    },
    plugins: [],
    important: true,
};
