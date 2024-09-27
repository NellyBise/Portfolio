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
      'dark-color': '#212121',
      grey: '#3C3C3C',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        def: 'inset 0 0 15px rgba(255,255,255, .8), 0 0 20px rgba(245,166,35, .6)',
        cardshadow:
          '0px -2px 40px 0px rgba(187,155,255, 0.15), 0px -2px 10px 0px rgba(233,223,255, 0.3), 0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  darkMode: ['class'],
  plugins: [],
}
