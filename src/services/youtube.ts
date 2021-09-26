import axios from "axios"

import { promiseHandler } from "utils/async"

export interface VideoData {
  title: string
  commentCount: string
  thumbnail: string
  viewCount: string
  likeCount: string
}

export class YouTubeService {
  private apiKey: string
  private youTubeSearchEndpoint: string
  private youTubeVideosEndpoint: string
  private channelId = "UC8YPqDf6j9YA7ckEIYYytKA"

  constructor() {
    if (typeof process.env.GATSBY_YOUTUBE_API_KEY !== "string") {
      throw new Error("No youtube api key in environment variables")
    }
    this.apiKey = process.env.GATSBY_YOUTUBE_API_KEY
    this.youTubeSearchEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}`
    this.youTubeVideosEndpoint = `https://www.googleapis.com/youtube/v3/videos?key=${this.apiKey}`
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

    const videoIdsQueryParam = (videoIds || []).join(",")
    const [results, error] = await promiseHandler(
      axios.get(
        `${this.youTubeVideosEndpoint}&id=${videoIds}&part=statistics,snippet`
      )
    )
    if (error) {
      return [null, error]
    }

    /**
     * TODO
     * map content, need a thumbnail, title, likes count, views count, comments counts
     */

    return [
      results?.data.items.map(({ snippet, statistics }: any) => ({
        title: snippet.title,
        thumbnail: snippet.thumbnails.maxres.url,
        viewCount: statistics.viewCount,
        commentCount: statistics.commentCount,
        likeCount: statistics.likeCount,
      })) || [],
      null,
    ]
  }
}
