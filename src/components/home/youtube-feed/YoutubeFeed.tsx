import React from "react"
import {
  Container,
  Heading,
  Grid,
  GridItem,
  SimpleGrid,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import { FaFilm, FaEye, FaUserFriends } from "react-icons/fa"

import { VideoCard } from "components/home/youtube-feed/VideoCard"
import { VideoLoading } from "components/home/youtube-feed/VideoLoading"
import { YouTubeService } from "services/youtube"
import { useYouTubeStore } from "global-state/youTubeStore"
import { FetchState } from "types"

export const YouTubeFeed = () => {
  const youTubeService = new YouTubeService()
  const { setVideos, setChannelInfo, setFetchStatus } = useYouTubeStore()
  const { videos, channelInfo, fetchStatus } = useYouTubeStore()

  const getYouTubeInfo = async () => {
    setFetchStatus(FetchState.FETCHING)
    try {
      const results = await Promise.all([
        youTubeService.getMostPopularVideos(),
        youTubeService.getChannelInfo(),
      ])
      const [videoResults, videoError] = results[0]
      if (videoResults) {
        setVideos(videoResults)
      }
      const [channelInfo, channelError] = results[1]
      console.log(channelInfo)

      if (channelInfo) {
        setChannelInfo(channelInfo)
      }
      setFetchStatus(FetchState.SUCCESS)
    } catch {
      setFetchStatus(FetchState.FAILED)
    }
  }

  React.useEffect(() => {
    if (fetchStatus === FetchState.IDLE) {
      getYouTubeInfo()
    }
  }, [fetchStatus])

  if (fetchStatus === FetchState.FAILED) {
    return null
  }

  const isFetching =
    fetchStatus === FetchState.FETCHING || fetchStatus === FetchState.IDLE

  const topRowColsSpan = useBreakpointValue({ base: 6, sm: 3, md: 3, lg: 2 })
  const viewCountColsSpan = useBreakpointValue({ base: 6, lg: 2 })

  return (
    <Container maxWidth="container.xl" paddingY="16">
      <Heading size="2xl" fontWeight="extrabold" marginBottom="16">
        Find me on YouTube
      </Heading>
      {!isFetching && (
        <Grid templateColumns="repeat(6, 1fr)" gap={6} marginBottom="16">
          <GridItem colSpan={topRowColsSpan}>
            <Flex alignItems="center" justifyContent="center">
              <Icon as={FaUserFriends} marginRight="4" w={12} h={12} />
              <Text fontSize="2xl" fontWeight="bold" marginBottom="0">
                {channelInfo?.subscriberCount} Subscribers
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={topRowColsSpan}>
            <Flex alignItems="center" justifyContent="center">
              <Icon as={FaFilm} marginRight="4" w={12} h={12} />
              <Text fontSize="2xl" fontWeight="bold" marginBottom="0">
                {channelInfo?.videoCount} Videos
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={viewCountColsSpan}>
            <Flex alignItems="center" justifyContent="center">
              <Icon as={FaEye} marginRight="4" w={12} h={12} />
              <Text fontSize="2xl" fontWeight="bold" marginBottom="0">
                {channelInfo?.viewCount} Views
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      )}
      <SimpleGrid minChildWidth="240px" spacing="8">
        {isFetching && [...Array(3)].map((e, i) => <VideoLoading key={i} />)}
        {!isFetching &&
          videos.map(video => (
            <VideoCard
              key={video.id}
              id={video.id}
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
