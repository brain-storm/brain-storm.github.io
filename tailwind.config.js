module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      teal: colors.teal,
      white: "#fff"
    },
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('/src/assets/hero-background.png')",
      })
    }
  },
  variants: {
    extend: {
      filter: ['hover', 'focus'],
    },
  },
  plugins: [],
}
