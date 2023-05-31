/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    boxShadow: {
      md: '0px 1px 4px rfba(0,0,0,0.16)',
      none: 'none',
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      gray: {
        100: '#f3f5f6',
        200: '#edece9',
        300: '#dfdfe1',
        500: '#5b6168',
        700: '#7a7c84',
        800: '#2a303c',
        900: '#131927',
      },
      blue: {
        100: '#f0f4ff',
        600: '#155ef3',
        700: '#175ce8',
        900: '#121827',
      },
    },
  },
  plugins: [],
}
