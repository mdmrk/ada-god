/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#84fab0',
        'darker-cyan': '#8fd3f4',
        yellow: '#d4fc79',
        green: '#96e6a1',
        red: '#f5576c',
        pink: '#f093fb',
        night: '#0f172a',
        'dark-room': '#1e293b'
      },
      fontFamily: {
        sans: ['"PT Sans"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
