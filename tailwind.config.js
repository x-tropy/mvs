/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue,css}",
  ],
  theme: {
    fontFamily: {
      serif: ["sourceserif"],
      sans: ["inter"],
      mono: ["jetbrains"],
      num: ["din"]
    },
  },
  plugins: [],
}
