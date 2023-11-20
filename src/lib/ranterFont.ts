import localFont from 'next/font/local'

const ranterFont = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'bold'
    }
  ],
  fallback: ['sans-serif'],
  preload: true,
  display: 'swap'
})

export default ranterFont
