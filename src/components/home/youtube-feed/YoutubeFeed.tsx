import React from "react"
import { Container, Box, Flex } from "@chakra-ui/react"

import { YouTubeService } from "services/youtube"
import { VideoCard } from "components/home/youtube-feed/VideoCard"

export const YouTubeFeed = () => {
  const youTubeService = new YouTubeService()

  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  const getYouTubeFeed = async () => {
    const [results, error] = await youTubeService.getMostPopularVideos()
    console.log(error)

    if (error) {
      setError(true)
      setIsLoading(false)
      return
    }

    setIsLoading(false)
    console.log(results)
  }

  getYouTubeFeed()

  if (error) {
    return null
  }

  return (
    <Container maxWidth="container.xx">
      <Flex>Youtube!</Flex>
      <VideoCard isLoading={true} />
    </Container>
  )
}
