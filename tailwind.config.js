/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,js,ts}", "./src/routes/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      keyframes: {
        ticker: {
          '0%': { transform: 'translate(0%, 0px)' },
          '100%': { transform: 'translate(-100%, 0px)' },
        }
      }
    },
  },
  plugins: [],
}
//"./src/**/*.{svelte,js,ts}", "./src/routes/**/*.{svelte,js,ts}"

