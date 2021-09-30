module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxHeight:{
      "120":"36rem",
      "32px":"32px",
      "700px":"700px",
      "full":"100%",
      "612px":"612px",
      "312px":"312px",
    },
    maxWidth:{
      "17":"17rem",
      "170px":"150px",
      "48px":"48px",
      "1500px":"1500px",
      "1400px":"1400px",
      "1900px":"1900px",
      "full":"100%",
      "411px":"411px",
    },
    minWidth: {
      "17":"17rem",
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
     '38': 'repeat(39, minmax(0, 1fr))',
    },
    screens: {
      "sm": '640px',
      // => @media (min-width: 640px) { ... }

      "md": '768px',
      // => @media (min-width: 768px) { ... }

      "lg": '1024px',
      // => @media (min-width: 1024px) { ... }

      "xl": '1600px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1736px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundColor:theme=>({
      ...theme("colors"),
      "fondo":"#E5E5E5",
      "555555":"var(--color-bg-select-menu-product)",
      "f5":"#F5F5F5",
      "menu":"var(--color-menu-select)",
      "1d":"var( --color-unoD)",
      "user-background":"var(--user-background)",
      "6f":"var(--color-base-background)",
      "6e":"#6e6e6e",
      "1f":"#1F1F1F",
      "c4":"#C4C4C4",
      "d5":"#D5D5D5",
      "d4":"#D4D4D4",
      "7d":"#7D7D7D",
      "7db":"#7DBCDF",
      "4f":"#4F4F4F",
    }),
    textColor:theme=>("colors"),
    textColor:{
      'red':'#ff0000',
      "white":"var(--color-text)",
      "black":"var(--color-text-back)",
      "force-black":"#000000",
      "force-white":"#ffffff"
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -15px rgba(0, 0, 0, 0.9)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
     '10xl': '10px 0px 10px 0px rgba(0, 0, 0, 0.8)',
     '4xl':'-1px 1px 8px 0px rgba(0,0,0,0.15)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    opacity: {
      '0': '0',
     '25': '.25',
     '50': '.5',
     '75': '.75',
     '10': '.1',
     '20': '.2',
     '30': '.3',
     '40': '.4',
     '50': '.5',
     '60': '.6',
     '70': '.7',
     '80': '.8',
     '90': '.9',
     '99': '.99',
     '100': '1',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
