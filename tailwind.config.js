/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx' 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
      colors: {
        rocket: { 
          background: '#0e0e0e',
          color_logo: '#ff5b50',
          card_color: '#252525',
          text_color: '#fff',
          subtitl_color: '#5a5757',
          black_text: '#000',
          color_iput: '#0D0D0D',
        }
      },

    },
  },
  plugins: [],
}
