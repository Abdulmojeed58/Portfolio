/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backGround: '#151515',
        border: '#4EE1A0'
      },
      fontFamily: {
        body: ['Space Grotesk']
      }
    },
  },
  plugins: [],
}