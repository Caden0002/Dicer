/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {

      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      fontFamily: {
        Brockmann: ["Brockmann", "sans-serif"],
        SFUI: ["SF-UI", "sans-serif"],
      },

    
      colors: {
        // Define your color variables here
        textColorPrimary: '#FFFFFF',
        textColorPrimary2: '#EEEEEE',
        textColorSecondary: '#BDBEC4',
        textColorTertiary:  '#85858C',
        textColorFooterLink: '#616161',
        textColorRed:  '#FD2B38',

        backgroundColorPrimary: '#000000',
        // backgroundColorSecondary: '#D9D1BB',
        // backgroundColorTertiary: '#351410',
        // backgroundColorQuaternary: '#F6F6EB',
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')

  ],
};
