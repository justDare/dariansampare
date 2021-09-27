import React from "react"
import { Flex, Container, Box, Heading, Text } from "@chakra-ui/react"

import { headerHeight } from "constants/ui"
import { StaticImage } from "gatsby-plugin-image"

export const Banner = () => {
  return (
    <Container maxWidth="container.xl" height={`calc(100vh - ${headerHeight})`}>
      <Flex
        height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <StaticImage
          src="../../images/memoji-laptop.png"
          width={200}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <Text fontWeight="bold" fontSize="3xl" marginBottom="8">
          Hi, I'm Darian 👋🏼
        </Text>
        <Heading
          size="3xl"
          fontWeight="extrabold"
          textAlign="center"
          marginBottom="12"
        >
          Building software, businesses, and people in tech.
        </Heading>
        <Text fontSize="xl" textAlign="center">
          <strong>Full Stack Developer</strong> from Canada with a specialty in
          end to end JavaScript development and building SaaS products. I also
          create <strong>tech content and coach</strong>.
        </Text>
      </Flex>
    </Container>
  )
}
