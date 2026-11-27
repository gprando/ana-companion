/* config.default.js — safe empty defaults for GitHub Pages
   Real tokens are stored in localStorage via setup.html
   Local overrides go in config.js (gitignored, never committed) */
window.ANA_CONFIG = window.ANA_CONFIG || {
  ticktick: { accessToken: '' },
  google:   { clientId: '', clientSecret: '', refreshToken: '', accessToken: '' },
  spotify:  { accessToken: '', refreshToken: '', clientId: '', clientSecret: '' },
  sensorUrl: '',
  personal: {
    name:      'Gabi',
    wakeTime:  '05:30',
    workStart: '08:30',
    windDown:  '20:30',
    sleepTime: '21:30',
    timezone:  'Europe/Stockholm',
  },
};
