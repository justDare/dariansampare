import React from "react"
import {
  Flex,
  Box,
  Image,
  Text,
  Icon,
  Spacer,
  Link,
  Button,
} from "@chakra-ui/react"
import { FaHeart, FaEye, FaComments } from "react-icons/fa"

import { VideoData } from "services/youtube"

interface Props extends VideoData {}

export const VideoCard: React.FC<Props> = ({
  id,
  title,
  thumbnail,
  viewCount,
  commentCount,
  likeCount,
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false)

  return (
    <Flex
      display={imageLoaded ? "flex" : "none"}
      flexDirection="column"
      borderRadius="lg"
      shadow="lg"
      overflow="hidden"
    >
      <Box>
        <Image
          src={thumbnail}
          onLoad={() => setImageLoaded(true)}
          objectFit="cover"
          width="full"
          marginBottom={0}
        />
      </Box>

      <Flex padding="4" direction="column" flexGrow={1}>
        <Text fontWeight="medium" marginBottom="4">
          {title}
        </Text>
        <Spacer />
        <div>
          <Flex marginBottom="4" flexWrap="wrap">
            <Flex alignItems="center" marginRight="8">
              <Icon as={FaEye} marginRight="4" />
              <Text marginBottom="0">{viewCount}</Text>
            </Flex>
            <Flex alignItems="center" marginRight="8">
              <Icon as={FaHeart} marginRight="4" />
              <Text marginBottom="0">{likeCount}</Text>
            </Flex>
            <Flex alignItems="center">
              <Icon as={FaComments} marginRight="4" />
              <Text marginBottom="0">{commentCount}</Text>
            </Flex>
          </Flex>
          <Link href={`https://www.youtube.com/watch?v=${id}`} target="_blank">
            <Button>Watch</Button>
          </Link>
        </div>
      </Flex>
    </Flex>
  )
}
