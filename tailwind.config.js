module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.js'],
  },
  theme: {
    extend: {
      width: {
        '80': '20rem',
        '100': '25rem'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      }
    },
  },
  variants: {},
  plugins: [],
}
