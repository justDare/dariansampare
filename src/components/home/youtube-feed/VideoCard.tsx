import React from "react"
import { Flex, Box, Image, Text } from "@chakra-ui/react"

import { VideoData } from "services/youtube"

interface Props extends VideoData {}

export const VideoCard: React.FC<Props> = ({
  title,
  thumbnail,
  viewCount,
  commentCount,
  likeCount,
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false)

  return (
    <Box
      display={imageLoaded ? "block" : "none"}
      borderRadius="lg"
      shadow="lg"
      overflow="hidden"
    >
      <Image
        src={thumbnail}
        onLoad={() => setImageLoaded(true)}
        objectFit="cover"
        width="full"
        marginBottom={0}
      />
      <Box padding="4">
        <Text>{title}</Text>
        <Flex>
          <Text>Views: {viewCount}</Text>
          <Text>Likes: {viewCount}</Text>
          <Text>Comments: {commentCount}</Text>
        </Flex>
      </Box>
    </Box>
  )
}
