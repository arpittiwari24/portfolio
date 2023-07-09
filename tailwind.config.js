/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   screens: {
  //     'mobile': '320px',
  //     'tablet' : '640px',
  //     'laptop'  : '1024px',
  //     'desktop' : '1280px',
  //   },
  // },
  plugins: [require('daisyui')],
}

