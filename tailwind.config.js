/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        black: 'hsl(0, 0%, 10%)',
        white: 'hsl(0, 0%, 100%)',
        elements: 'hsl(0, 0%, 50%)',
        border: 'hsl(0, 0%, 19%)',
        orange:'hsl(22,65%,57%)',
        orangeAccent: 'hsl(23, 90%, 74%)',
        grey: 'hsl(0, 0%, 95%)',
        whitishGrey: 'hsl(0, 0%, 98%)',
        brightOrange:'hsl(0,100%,50%)',
        blackII: 'hsla(0, 0%, 0%, 0.5)',
        greyBorder: 'hsl(0, 0%, 88%)',
        strawberryRed: 'hsl(354, 84%, 57%)',
        green: 'hsl(148,35%,50%)',
      },
      fontFamily: {
        Manrope : ['Manrope', 'sans-serif'],
      },
      height:{
        "screen-16" : "calc(100vh - 84px)",
        "screen-78" : "calc(100vh - 449px)"
      }
    },
    screens: {
			xs: '375px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px'
		},
  },
  plugins: [],
}