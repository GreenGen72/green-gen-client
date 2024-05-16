/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-green': '#316127',
        'main-light-green': '#74A435',
        'lite-grey':'#F1F8F3',
        'main-base-color': '#F1F8F3',
        'wp-bg-color': '#487908',
        'wp-hv-bg-color': '#4DAA54'
      }
    },
  },
  plugins: [require("daisyui")],
};