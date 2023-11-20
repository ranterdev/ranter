import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#FF4C3C',
      secondary: '#32E3AF',
      purple: '#7F4EFF',
      white: '#FFFFFF',
      black: '#010109',
      hover: '#5F5E5E'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
} satisfies Config
