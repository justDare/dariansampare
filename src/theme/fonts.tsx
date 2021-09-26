import React from "react"
import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./theme/font-files/PlusJakartaSans-Regular.woff2') format('woff2'), url('./theme/font-files/PlusJakartaSans-Regular.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('./theme/font-files/PlusJakartaSans-Medium.woff2') format('woff2'), url('./theme/font-files/PlusJakartaSans-Medium.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('./theme/font-files/PlusJakartaSans-Bold.woff2') format('woff2'), url('./theme/font-files/PlusJakartaSans-Bold.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('./theme/font-files/PlusJakartaSans-ExtraBold.woff2') format('woff2'), url('./theme/font-files/PlusJakartaSans-ExtraBold.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
)
