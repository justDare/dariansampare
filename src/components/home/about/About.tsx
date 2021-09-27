import React from "react"
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react"

export const About = () => {
  const { colorMode } = useColorMode()
  const isLightTheme = colorMode === "light"
  const summaryWidth = useBreakpointValue({
    base: "100%",
    md: "90%",
    lg: "80%",
  })
  const boxPositionRight = useBreakpointValue({
    base: "20%",
    md: "30%",
    lg: "40%",
  })

  return (
    <Flex minHeight="600px" position="relative" alignItems="center">
      <Box
        backgroundColor={isLightTheme ? "gray.50" : "gray.700"}
        height="100%"
        width="80%"
        position="absolute"
        borderRightRadius="3xl"
        zIndex="-1"
        right={boxPositionRight}
      />
      <Container maxWidth="container.xl" height="100%">
        <Box>
          <Text
            color="gray.400"
            fontWeight="extrabold"
            fontSize="sm"
            letterSpacing="widest"
          >
            NICE TO MEET YOU
          </Text>
          <Heading
            size="2xl"
            fontWeight="extrabold"
            marginTop="4"
            marginBottom="8"
          >
            A bit about Darian
          </Heading>
          <Text maxWidth={summaryWidth}>
            I'm a Full Stack Developer who's been building industry utilized
            applications since my second year of college. Since then, I've
            worked in startups, founded a couple myself, and taken on freelance
            projects and consulting for clients.
            <br />
            <br />
            I'm a Full Stack Developer who's been building industry utilized
            applications since my second year of college. Since then, I've
            worked in startups, founded a couple myself, and taken on freelance
            projects and consulting for clients.
          </Text>
        </Box>
      </Container>
    </Flex>
  )
}
