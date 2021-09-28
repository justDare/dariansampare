import React from "react"
import { Container, Heading, SimpleGrid } from "@chakra-ui/react"

import { VideoCard } from "components/home/youtube-feed/VideoCard"
import { VideoLoading } from "components/home/youtube-feed/VideoLoading"
import { YouTubeService } from "services/youtube"
import { useYouTubeStore } from "global-state/youtubeStore"

export const YouTubeFeed = () => {
  const youTubeService = new YouTubeService()
  const { setVideos } = useYouTubeStore()
  const { videos } = useYouTubeStore()

  const [error, setError] = React.useState(false)

  const getYouTubeFeed = async () => {
    const [results, error] = await youTubeService.getMostPopularVideos()
    if (error || !results) {
      setError(true)
      return
    }

    setVideos(results)
  }

  React.useEffect(() => {
    if (!videos.length) {
      getYouTubeFeed()
    }
  }, [videos])

  if (error) {
    return null
  }

  const isLoading = !videos.length

  return (
    <Container maxWidth="container.xl">
      <Heading>Find me on YouTube</Heading>
      <SimpleGrid minChildWidth="240px" spacing="8">
        {isLoading && [...Array(3)].map((e, i) => <VideoLoading />)}
        {!isLoading &&
          videos.map(video => (
            <VideoCard
              key={video.title}
              title={video.title}
              thumbnail={video.thumbnail}
              viewCount={video.viewCount}
              commentCount={video.commentCount}
              likeCount={video.likeCount}
            />
          ))}
      </SimpleGrid>
    </Container>
  )
}
