import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Container, Spacer, Flex, Box, Link, Text } from "@chakra-ui/react"

import { ThemeToggle } from "components/layout/ThemeToggle"
import { headerHeight } from "constants/ui"

export const Header: React.FC = () => (
  <header
    style={{
      height: headerHeight,
    }}
  >
    <Container maxWidth="container.xl">
      <Box py={4}>
        <Flex alignItems="center">
          'LOGO!'
          <Spacer />
          <Text fontWeight="bold" marginRight="8">
            <Link as={GatsbyLink} to="/">
              About
            </Link>
          </Text>
          <Text fontWeight="bold" marginRight="8">
            <Link as={GatsbyLink} to="/">
              Corporate
            </Link>
          </Text>
          <Text fontWeight="bold" marginRight="8">
            <Link as={GatsbyLink} to="/">
              Coaching
            </Link>
          </Text>
          <Text fontWeight="bold">
            <Link as={GatsbyLink} to="/">
              Shop
            </Link>
          </Text>
          <Spacer />
          <ThemeToggle />
        </Flex>
      </Box>
    </Container>
  </header>
)
