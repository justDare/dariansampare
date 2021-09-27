import { extendTheme } from "@chakra-ui/react"
import type { Styles } from "@chakra-ui/theme-tools"
import { mode } from "@chakra-ui/theme-tools"

const colors = {
  primary: "rebeccapurple",
}

const fonts = {
  heading: "Plus Jakarta Sans",
  body: "Plus Jakarta Sans",
}

// setup light/dark mode global defaults
const styles: Styles = {
  global: props => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
    },
  }),
}

export const theme = extendTheme({
  styles,
  colors,
  fonts,
})
