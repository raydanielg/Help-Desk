const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
    // prettier-ignore
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
    darkMode: ['class', '[data-mode="dark"]'],
    // important: true,
    safelist: [
        'bg-slate-800',
        'bg-slate-900',
    ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
        violet: colors.violet,
        amber: colors.amber,
        lime: colors.lime,
        cyan: colors.cyan,
        sky: colors.sky,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      gray: colors.slate,
      indigo: {
        100: '#e6e8ff',
        300: '#b2b7ff',
        400: '#7886d7',
        500: '#6574cd',
        600: '#5661b3',
        800: '#2f365f',
        900: '#191e38',
      },
    },
      screens: {
          xs: '540px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
      },
      fontFamily: {
          'nunito': ['"Nunito", sans-serif'],
      },
    extend: {
        colors: {
            'dark': '#3c4858',
            'black': '#161c2d',
            'dark-footer': '#192132',
        },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.200', 'currentColor'),
      }),
      fontFamily: {
        sans: ['Cerebri Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: theme => ({
        outline: '0 0 0 2px ' + theme('colors.indigo.500'),
          sm: '0 2px 4px 0 rgb(60 72 88 / 0.15)',
          DEFAULT: '0 0 3px rgb(60 72 88 / 0.15)',
          md: '0 5px 13px rgb(60 72 88 / 0.20)',
          lg: '0 10px 25px -3px rgb(60 72 88 / 0.15)',
          xl: '0 20px 25px -5px rgb(60 72 88 / 0.1), 0 8px 10px -6px rgb(60 72 88 / 0.1)',
          '2xl': '0 25px 50px -12px rgb(60 72 88 / 0.25)',
          inner: 'inset 0 2px 4px 0 rgb(60 72 88 / 0.05)',
          testi: '2px 2px 2px -1px rgb(60 72 88 / 0.15)',
      }),
      fill: theme => theme('colors'),
        spacing: {
            0.75: '0.1875rem',
            3.25: '0.8125rem'
        },

        maxWidth: ({
            theme,
            breakpoints
        }) => ({
            '1200': '71.25rem',
            '992': '60rem',
            '768': '45rem',
        }),

        zIndex: {
            1: '1',
            2: '2',
            3: '3',
            999: '999',
        },
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
  ],
}
