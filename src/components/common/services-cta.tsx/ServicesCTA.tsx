import React from "react"
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react"

interface Props {
  title: string
  description: string
}

export const ServicesCTA: React.FC<Props> = ({ title, description }) => {
  return (
    <Box minHeight="600px">
      <Container maxWidth="container.xl">
        <Flex>
          <Box>
            <Heading>{title}</Heading>
            <Text>{description}</Text>
          </Box>
          <Box></Box>
        </Flex>
      </Container>
    </Box>
  )
}
