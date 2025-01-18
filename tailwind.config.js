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
    extend: {
      maxWidth: {
        '8xl': '90rem',  // 1440px
      }
    }
  },
  plugins: [],
}
