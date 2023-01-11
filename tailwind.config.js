/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./public/**/*.{html}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "warning": "#ff8c32",
        }
      }
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        'poppins': []
      },
    },
    colors: {
      ungutua: '#06113c',
      oren: '#ff8c32',
      putihtua: '#dddddd',
      putihmuda: '#eeeeee',
      navi: '#243763',
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-scrollbar'),
  ],
}