import React from "react"
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react"

interface Props {
  isLoading?: boolean
}

export const VideoCard: React.FC<Props> = ({ isLoading }) => (
  <>
    {isLoading && (
      <Stack>
        <Skeleton height="80px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    )}
  </>
)
