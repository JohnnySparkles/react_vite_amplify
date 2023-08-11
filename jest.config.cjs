const {defaults} = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
  transform: { 
    "^.+\\.(js|jsx)$": "babel-jest",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.cjs',
  },
  setupFilesAfterEnv: [
      "<rootDir>/setupTests.js"
  ],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^uuid$": "uuid"
  },
  testPathIgnorePatterns: [
    "<rootDir>/amplify/#current-cloud-backend",
  ],
};

module.exports = config;


