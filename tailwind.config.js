module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxHeight:{
      "120":"36rem",
      "32px":"32px"
    },
    maxWidth:{
      "17":"17rem",
      "170px":"150px",
      "48px":"48px",
      "1400px":"1400px"
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
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
