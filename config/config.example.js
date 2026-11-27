// ANA Companion — Configuration Template
// Copy this file to config.js and fill in your own values
// config.js is gitignored — your secrets stay private

const CONFIG = {
  // TickTick API
  ticktick: {
    clientId: "YOUR_TICKTICK_CLIENT_ID",
    clientSecret: "YOUR_TICKTICK_CLIENT_SECRET",
    accessToken: "YOUR_ACCESS_TOKEN"
  },

  // Google Calendar API
  google: {
    clientId: "YOUR_GOOGLE_CLIENT_ID",
    clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
    calendarId: "YOUR_CALENDAR_ID"
  },

  // Spotify Web API
  spotify: {
    clientId: "YOUR_SPOTIFY_CLIENT_ID",
    clientSecret: "YOUR_SPOTIFY_CLIENT_SECRET",
    // Playlist IDs for each mode
    playlists: {
      morning: "YOUR_MORNING_PLAYLIST_ID",
      focus: "YOUR_FOCUS_PLAYLIST_ID",
      evening: "YOUR_EVENING_PLAYLIST_ID",
      sleep: "YOUR_SLEEP_PLAYLIST_ID"
    }
  },

  // Feedly (research feeds)
  feedly: {
    accessToken: "YOUR_FEEDLY_TOKEN",
    streamId: "YOUR_STREAM_ID"
  },

  // Personal settings
  personal: {
    name: "Gabi",
    wakeTime: "05:30",
    workStart: "08:30",
    windDown: "20:30",
    sleepTime: "21:30",
    timezone: "Europe/Stockholm"
  }
};
