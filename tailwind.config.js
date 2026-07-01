export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF4E9',
          2: '#F4E8D5',
        },
        ink: {
          DEFAULT: '#2B2018',
          soft: '#5A4B3C',
        },
        terra: {
          DEFAULT: '#D96A2B',
          dark: '#B8531C',
        },
        olive: {
          DEFAULT: '#5C7148',
          bright: '#7BA05B',
        },
        pasta: {
          sipa: '#2A2A2E',
          spanac: '#4A6B2A',
          cvekla: '#7E2040',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
