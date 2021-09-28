import { extendTheme } from "@chakra-ui/react"
import type { Styles } from "@chakra-ui/theme-tools"
import { mode } from "@chakra-ui/theme-tools"

import { Button } from "theme/components"

const colors = {}

const fonts = {
  heading: "'Barlow', sans-serif",
  body: "'Barlow', sans-serif",
}

// setup light/dark mode global defaults
const styles: Styles = {
  global: props => ({
    "html, body": {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      strong: {
        fontWeight: "extrabold",
      },
    },
  }),
}

export const theme = extendTheme({
  colors,
  fonts,
  styles,
  components: {
    Button,
  },
})
