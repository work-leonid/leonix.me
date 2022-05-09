module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
	fontFamily: {
		'montserat': ['Montserrat', 'sans-serif']
	}
    },
  },
  plugins: [],
}
