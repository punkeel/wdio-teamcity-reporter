'use strict'

const teamcity = require('../../').default
const { TEST_USER, TEST_KEY } = process.env

exports.config = {
  specs: ['./test/integration/*.js'],

  user: TEST_USER,
  key: TEST_KEY,

  capabilities: [
    {
      maxInstances: 2,
      browserName: 'chrome',
      // 'goog:chromeOptions': {
      //   args: ['--headless', '--disable-gpu', '--window-size=1280,800'],
      // },
    }
  ],

  sync: true,

  logLevel: 'silent',

  coloredLogs: true,

  screenshotPath: 'shots',

  specFileRetries: 1,

  waitforTimeout: 10000,

  connectionRetryTimeout: 30000,

  framework: 'mocha',

  reporters: [[teamcity, {
    captureStandardOutput: true,
    flowId: true,
    message: '[browser] / [title]' // [browser] [title]
  }]],

  mochaOpts: {
    timeout: 60000,
    ui: 'tdd'
  },

  services: ['selenium-standalone']
}
