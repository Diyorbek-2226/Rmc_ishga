/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'min-small': '380px',
        'max-small': '600px'
      },
      colors: {
       'create':"#EDF3F5",
        'custom':'#E1AF93',
        'belaya':'#FFFFFF',
        'footer':"#F7F7F7"
      }
    },
  },
  plugins: [],
}