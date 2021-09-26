import React from "react"
import { Container, Heading, SimpleGrid } from "@chakra-ui/react"

import { YouTubeService, VideoData } from "services/youtube"
import { VideoCard } from "components/home/youtube-feed/VideoCard"

export const YouTubeFeed = () => {
  const youTubeService = new YouTubeService()

  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [videoData, setVideoData] = React.useState<VideoData[]>([])

  const getYouTubeFeed = async () => {
    const [results, error] = await youTubeService.getMostPopularVideos()
    console.log(error)

    if (error || !results) {
      setError(true)
      setIsLoading(false)
      return
    }

    setVideoData(results)
    setIsLoading(false)
  }

  // React.useEffect(() => {
  //   getYouTubeFeed()
  // }, [])

  if (error) {
    return null
  }

  const testData = {
    title: "This is a super cool title!",
    thumbnail:
      "https://i9.ytimg.com/vi_webp/D1gkEJkPd-U/mqdefault.webp?v=61466793&sqp=CJCZw4oG&rs=AOn4CLBKen6QQ0TE8RJ7TtqtJIOJiTSmhA",
    viewCount: "5000",
    commentCount: "127",
    likeCount: "400",
  }

  return (
    <Container maxWidth="container.xx">
      <Heading>Find me on YouTube</Heading>
      <SimpleGrid minChildWidth="240px" spacing="4">
        <VideoCard
          // isLoading={true}
          title={testData.title}
          thumbnail={testData.thumbnail}
          viewCount={testData.viewCount}
          commentCount={testData.commentCount}
          likeCount={testData.likeCount}
        />
        <VideoCard
          // isLoading={true}
          title={testData.title}
          thumbnail={testData.thumbnail}
          viewCount={testData.viewCount}
          commentCount={testData.commentCount}
          likeCount={testData.likeCount}
        />
        <VideoCard
          // isLoading={true}
          title={testData.title}
          thumbnail={testData.thumbnail}
          viewCount={testData.viewCount}
          commentCount={testData.commentCount}
          likeCount={testData.likeCount}
        />
      </SimpleGrid>
    </Container>
  )
}
