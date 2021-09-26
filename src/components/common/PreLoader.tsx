import React from "react"
import { Box, Flex } from "@chakra-ui/react"

interface Props {
  onFinish: () => any
}

export const PreLoader: React.FC<Props> = ({ onFinish }) => {
  React.useEffect(() => {
    setTimeout(() => onFinish(), 1000)
  }, [])

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Box>Hi!</Box>
    </Flex>
  )
}
