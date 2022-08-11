module.exports = {
  content: ['./src/**/*.njk', './src/**/*.md', './assets/js/**/*.js',],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'dark-gray': 'hsl(0, 0%, 8%)'
      },
      fontFamily: {
        'sans': ['Epilogue'],
      }
    },
  },
  plugins: [],
}
