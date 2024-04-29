/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-green': '#3C8059',
        'main-light-green': '#62AD82',
        'lite-grey':'#F1F8F3',
        'main-base-color': '#F1F8F3',
        'wp-bg-color': '#60D669',
        'wp-hv-bg-color': '#4DAA54'
      }
    },
  },
  plugins: [require("daisyui")],
};