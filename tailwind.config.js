/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#D13B3B',
        faintred: '#F6D8D8',
      },
    },
  },
  plugins: [],
}

