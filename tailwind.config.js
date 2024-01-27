/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryCyan': 'hsl(180, 66%, 49%)',
        'primaryDarkViolet': 'hsl(257, 27%, 26%)',
        'secondaryRed': 'hsl(0, 87%, 67%)',
        'neutralGray': 'hsl(0, 0%, 75%)',
        'neutralGrayishViolet': 'hsl(257, 7%, 63%)',
        'neutralVeryDarkBlue': 'hsl(255, 11%, 22%)',
        'neutralVeryDarkViolet': 'hsl(260, 8%, 14%)',
      },
      screens: {
        'sm': '320px',
        'md': '481px',
        'lg': '650px',
        'xl': '1025px',
        '2xl': '1201px',
      },
    },
  },
  plugins: [],
};
