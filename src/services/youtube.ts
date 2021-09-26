import axios from "axios"

import { promiseHandler } from "utils/async"

export class YouTubeService {
  private apiKey: string
  private apiEndpoint: string
  private channelId = "UC8YPqDf6j9YA7ckEIYYytKA"

  constructor() {
    if (typeof process.env.GATSBY_YOUTUBE_API_KEY !== "string") {
      throw new Error("No youtube api key in environment variables")
    }
    this.apiKey = process.env.GATSBY_YOUTUBE_API_KEY
    this.apiEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}`
  }

  public async getMostPopularVideos(): Promise<[null, Error] | [[any], null]> {
    const [results, error] = await promiseHandler(
      axios.get(`${this.apiEndpoint}&part=snippet&maxResults=3`)
    )
    if (error) {
      return [null, error]
    }
    return [results?.data.items || [], null]
  }
}
