/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn': '0 5px 10px rgba(0, 0, 0, 0.12)',
        'btn-hover': '0 30px 60px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
