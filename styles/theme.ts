import { extendTheme } from '@chakra-ui/react'

const colors = {}

const fonts = {
  heading: "'Roboto', sans-serif",
  body: "'Open Sans', sans-serif",
}

const theme = extendTheme({ colors, fonts })

export default theme
