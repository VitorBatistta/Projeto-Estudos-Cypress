const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    projectId: "pu1gmt",
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "http://lojaebac.ebaconline.art.br",
    setupNodeEvents(on, config) {
    },  
  },
});
