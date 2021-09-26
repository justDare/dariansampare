import React from "react"
import { Flex, Box, Image, Text } from "@chakra-ui/react"

import { VideoData } from "services/youtube"
import { VideoLoading } from "components/home/youtube-feed/VideoLoading"

interface Props extends VideoData {
  isLoading?: boolean
}

export const VideoCard: React.FC<Props> = ({
  isLoading,
  title,
  thumbnail,
  viewCount,
  commentCount,
  likeCount,
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false)
  console.log(imageLoaded)

  return (
    <>
      {isLoading || (!imageLoaded && <VideoLoading />)}
      {!isLoading && (
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
      )}
    </>
  )
}
