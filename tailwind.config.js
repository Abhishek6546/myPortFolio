/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'none': 'none',
        'grayscale': 'grayscale(1)',
        'sepia': 'sepia(1)',
        'invert': 'invert(1)',
        'blur': 'blur(5px)',
        'brightness-50': 'brightness(0.5)',
        'brightness-75': 'brightness(0.75)',
        'contrast-200': 'contrast(2)',
      },
    },
  },
  plugins: [],
}

