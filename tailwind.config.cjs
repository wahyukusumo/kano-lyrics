/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        sliding: {
          '0%': {top:'-300px', opacity:0},
          '100%': {top:0, opacity:1}
        },
        zoomIn: {
          '0%': {transform: 'scale(.9)', opacity: 1},
          '100%': {transform: 'scale(1)', opacity: 0}
        },
        zoomOut: {
          '0%': {transform: 'scale(1.2)', opacity: 0},
          '100%': {transform: 'scale(1)', opacity: 1}
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'sliding': 'sliding .3s linear',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'zoom-out': 'zoomOut .3s ease',
        'zoom-in': 'zoomIn .3s ease forwards'
      },
      fontFamily: {
        'raleway': ['raleway', 'sans-serif'],
      },
    },
  },
  plugins: []
}