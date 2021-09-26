import { Skeleton, Stack } from "@chakra-ui/react"
import React from "react"

export const VideoLoading = () => (
  <Stack>
    <Skeleton height="80px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
)
