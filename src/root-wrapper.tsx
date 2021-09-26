import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

import { theme } from "theme/theme"
import { Fonts } from "theme/fonts"

export const rootWrapper = ({ element }: { element: any }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Fonts />
      {element}
    </ChakraProvider>
  )
}
