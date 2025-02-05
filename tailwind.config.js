/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slime-50': '#ebffbd',
        'slime-100': '#cff9a3',
        'slime-200': '#b4f38a',
        'slime-300': '#98ec70',
        'slime-400': '#7de657',
        'slime-500': '#61e03d',
        'slime-600': '#4ec731',
        'slime-700': '#4ec731',
        'slime-800': '#279618',
        'slime-900': '#137e0c',
        'slime-950': '#006500',
        'slime-black': '#1F420D',
      },
    },
  },
  plugins: [],
}