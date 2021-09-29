import axios from "axios"

import { promiseHandler } from "utils/async"

export interface VideoData {
  id: string
  title: string
  commentCount: string
  thumbnail: string
  viewCount: string
  likeCount: string
}

export interface ChannelInfo {
  viewCount: string
  subscriberCount: string
  videoCount: string
}

export class YouTubeService {
  private apiKey: string
  private youTubeSearchEndpoint: string
  private youTubeVideosEndpoint: string
  private youTubeChannelsEndpoint: string
  private channelId = "UC8YPqDf6j9YA7ckEIYYytKA"

  constructor() {
    if (typeof process.env.GATSBY_YOUTUBE_API_KEY !== "string") {
      throw new Error("No youtube api key in environment variables")
    }
    this.apiKey = process.env.GATSBY_YOUTUBE_API_KEY
    this.youTubeSearchEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}`
    this.youTubeVideosEndpoint = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}`
    this.youTubeChannelsEndpoint = `https://www.googleapis.com/youtube/v3/channels?key=${this.apiKey}&id=${this.channelId}`
  }

  private async getMostPopularVideoIds(): Promise<
    [null, Error] | [[string], null]
  > {
    const [results, error] = await promiseHandler(
      axios.get(
        `${this.youTubeSearchEndpoint}&part=snippet&maxResults=3&type=video`
      )
    )
    if (error) {
      return [null, error]
    }

    return [results?.data.items.map((item: any) => item.id.videoId), null]
  }

  public async getMostPopularVideos(): Promise<
    [null, Error] | [[VideoData], null]
  > {
    const [videoIds, videoIdsError] = await this.getMostPopularVideoIds()
    if (videoIdsError) {
      return [null, videoIdsError]
    }

    const [results, error] = await promiseHandler(
      axios.get(
        `${this.youTubeVideosEndpoint}&id=${videoIds}&part=statistics,snippet`
      )
    )
    if (error) {
      return [null, error]
    }

    return [
      results?.data.items.map(({ id, snippet, statistics }: any) => ({
        id,
        title: snippet.title,
        thumbnail: snippet.thumbnails.maxres.url,
        viewCount: statistics.viewCount,
        commentCount: statistics.commentCount,
        likeCount: statistics.likeCount,
      })) || [],
      null,
    ]
  }

  public async getChannelInfo(): Promise<[ChannelInfo, null] | [null, Error]> {
    const [results, error] = await promiseHandler(
      axios.get(`${this.youTubeChannelsEndpoint}&part=statistics`)
    )
    if (error) {
      return [null, error]
    }

    const myChannel = results?.data.items[0]
    const { viewCount, subscriberCount, videoCount } = myChannel.statistics

    return [
      {
        viewCount: viewCount,
        subscriberCount: subscriberCount,
        videoCount: videoCount,
      },
      null,
    ]
  }
}
