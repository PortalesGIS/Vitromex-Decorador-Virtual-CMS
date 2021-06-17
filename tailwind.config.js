module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxHeight:{
      "120":"36rem",
      "32px":"32px",
      "700px":"700px",
      "full":"100%"
    },
    maxWidth:{
      "17":"17rem",
      "170px":"150px",
      "48px":"48px",
      "1500px":"1500px",
      "1400px":"1400px",
      "1900px":"1900px",
      "full":"100%",
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      "2100px":"2100px"
     },
     gridTemplateColumns: {
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
      '13': 'repeat(13, minmax(0, 1fr))',
     '34': 'repeat(34, minmax(0, 1fr))',
     '38': 'repeat(38, minmax(0, 1fr))',
    },
    screens: {
      "sm": '640px',
      // => @media (min-width: 640px) { ... }

      "md": '768px',
      // => @media (min-width: 768px) { ... }

      "lg": '1024px',
      // => @media (min-width: 1024px) { ... }

      "xl": '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundColor:theme=>({
      ...theme("colors"),
      "fondo":"#E5E5E5"
    }),
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
     '10xl': '0 35px 60px -15px rgba(0, 0, 0, 1)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
