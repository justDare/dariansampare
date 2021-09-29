import create from "zustand"
import { persist, devtools } from "zustand/middleware"

import { ChannelInfo, VideoData } from "services/youtube"
import { FetchState } from "types"

interface YouTubeState {
  fetchStatus: FetchState
  setFetchStatus: (status: FetchState) => void
  videos: VideoData[]
  setVideos: (videos: VideoData[]) => void
  channelInfo: ChannelInfo | null
  setChannelInfo: (channelInfo: ChannelInfo) => void
}

export const useYouTubeStore = create<YouTubeState>(
  devtools(
    persist(
      set => ({
        fetchStatus: FetchState.IDLE,
        setFetchStatus: (fetchStatus: FetchState) => set({ fetchStatus }),
        videos: [],
        setVideos: (videos: VideoData[]) => set({ videos }),
        channelInfo: null,
        setChannelInfo: (channelInfo: ChannelInfo) => set({ channelInfo }),
      }),
      {
        name: "youTube-storage",
      }
    ),
    "youTubeStore"
  )
)

export const getVideos = (state: YouTubeState) => state.videos
