/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Add your preferred font
        serif: ['Merriweather', 'serif'],
        mono: ['Cutive Mono', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'serif'], 
      }
    },
  },
  plugins: [],
};
