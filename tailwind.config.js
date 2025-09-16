/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['"Sonorous"', "sans-serif"],
      display: ['"Cerco"', "sans-serif"],
      body: ['"Sonorous"', "sans-serif"],
    },
    backgroundImage: {
      "plus-icon": "url('img/icons/plus.png')",
      "seashore": "url('img/seashore.png')",
      "floating-fox": "url('img/FloatingFox.png')",
      "lying-down-fox": "url('img/LyingDownFox.png')",
      "prize-acer-nitro-monitor": "url('img/prizes/acer_nitro_monitor.png')",
    },
    extend: {
      backgroundPosition: {
        "center-top": "center top",
        "center-bottom": "center bottom",
      },
      colors: {
        fuchsia: "#fffffff1",
        "california-peach": "#ffbd6a",
        "dried-magenta": "#c93221ff",
        "bowen-blue": 'rgb(107, 154, 85)',
        "ice-dream": "#eaece1",
      },
    },
  },
  plugins: [],
};
