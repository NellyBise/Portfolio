/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'main-color': '#201087',
      'secondary-color': '#F5A623',
      'light-color': '#F3F2F8FF',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    darkMode: 'selector',
  },
  plugins: [],
}
