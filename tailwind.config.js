/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e826",
        table: "#1A73E859",
        tbl: "#EBF3FF59",
        textcolor: "#1A202C",
        button: "#1A73E8",
        footer: "#282828",
        menu: "#4B4B4B",
        main: "#EEF5FF",
        alpha: "#00000069",
        arrow: "#3C4852",
        btn: "#B6B6B6",
        bdr: "#00000038",
        txt: "#1350A0",
        bdr2: "#737373"
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 4px 65px 1px #00072B36',
        'box': '0px 1px 24.4px 1px #00000029',
        'tblshadow': '0px 4px 29.3px 0px #3C3C3C26',
        'btn': '0px 2px 26.6px 0px #0000002E'
      },
      borderRadius: {
        'bottom': '0px 0px 14px 14px',
      },
      backgroundImage: {
        'hero': "url('/public/assets/images/grad.png')",
        'plate': "url('/public/assets/images/plate.png')"
      }
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
  },
  plugins: [],
}

