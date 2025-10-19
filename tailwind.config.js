/** @type {import('tailwindcss').Config} */
import plugin from "tw-elements/dist/plugin.cjs"
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [plugin],
}

