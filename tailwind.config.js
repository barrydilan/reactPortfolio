/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'main': 'rgba(34, 34, 67, 1)',
      'primary': 'rgba(255, 255, 255, 0.7)',
      'accent': 'rgba(130, 255, 190, 0.9)',
      'primary-1': 'rgba(255, 255, 255)',
      'green': '#13ce66',
      'selection': 'rgba(254, 95, 87, 0.6)',
      'round-span-text': 'rgba(45, 43, 83)',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}
