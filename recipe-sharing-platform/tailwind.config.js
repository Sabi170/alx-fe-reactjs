/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html', // <--- THIS LINE MUST BE PRESENT
    './src/**/*.{js,jsx,ts,tsx}', // <--- AND THIS LINE MUST BE PRESENT
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};