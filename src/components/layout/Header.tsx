import * as React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Container, Spacer, Flex, Box, Link } from "@chakra-ui/react"

import { ThemeToggle } from "components/layout/ThemeToggle"

export const Header: React.FC = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Container maxWidth="container.xl">
      <Box py={4}>
        <Flex alignItems="center">
          'LOGO!'
          <Spacer />
          <h1 style={{ margin: 0 }}>
            <Link
              as={GatsbyLink}
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Shop
            </Link>
          </h1>
          <ThemeToggle />
        </Flex>
      </Box>
    </Container>
  </header>
)
