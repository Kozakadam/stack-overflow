/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'badge': {
          gold: '#f7cb45',
          silver: '#adafb3',
          bronze: '#dca87a',
        },
      },
    },
  },
    plugins: [],
  safelist: [{
    pattern: /(bg|text|border|hover:bg)-badge*-(bronze|silver|gold)/
  }]
}
