/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerGradient': 'linear-gradient(101.08deg, var(--tw-gradient-stops))'
      },
      colors: {
        'secondary': '#ED712E',
        'socialIcons': "#161C2D",
      },
    },
  },
  plugins: [],
}

