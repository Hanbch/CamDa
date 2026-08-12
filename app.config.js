const appJson = require('./app.json');

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('expo/config').ExpoConfig} */
module.exports = {
  ...appJson.expo,
  experiments: {
    ...(appJson.expo.experiments ?? {}),
    typedRoutes: true,
    // GitHub Pages: https://Hanbch.github.io/CamDa/
    baseUrl: isGitHubPages ? '/CamDa' : '',
  },
};
