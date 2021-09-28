import create from "zustand"
import { persist, devtools } from "zustand/middleware"

import { VideoData } from "services/youtube"

interface YouTubeState {
  videos: VideoData[]
  setVideos: (videos: VideoData[]) => void
}

export const useYouTubeStore = create<YouTubeState>(
  devtools(
    persist(
      set => ({
        videos: [],
        setVideos: (videos: VideoData[]) => {
          set({ videos })
        },
      }),
      {
        name: "youTube-storage",
      }
    ),
    "youTubeStore"
  )
)

export const getVideos = (state: YouTubeState) => state.videos
