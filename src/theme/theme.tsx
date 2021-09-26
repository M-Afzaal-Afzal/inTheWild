import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  heading: `'Roboto Slab', serif`,
  body: "Raleway",
}

const breakpoints = createBreakpoints({
  sm: '20em',
  md: '30em',
  lg: '48em',
  xl: '67.5em',
  'xxl': '75em',
})

const theme = extendTheme({
  colors: {
    brand: {
      white: '#fff',
      green: '#19ae70',
    },
    grey: {
      300: '#ababab',
      400: '#828282',
      500: '#444444',
      600:'#333333',
      700:'#222222',
    },
  },
  fonts,
  breakpoints,
})

export default theme
