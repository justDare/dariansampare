import React from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"

export const ThemeToggle = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      icon={<ToggleIcon />}
      variant="ghost"
      aria-label="Toggle Theme"
      onClick={toggleMode}
    />
  )
}
