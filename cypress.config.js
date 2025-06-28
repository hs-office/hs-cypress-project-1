const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    html: true,
    json: true,
    saveJson: true
  },
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,ts}'
  }
});
