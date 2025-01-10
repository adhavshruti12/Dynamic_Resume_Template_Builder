/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'resume-gray': '#D1D5DB',
        'resume-dark': '#1F2937',
      },
    },
  },
  plugins: [],
}