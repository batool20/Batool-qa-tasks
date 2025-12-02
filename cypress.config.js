const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: "https://demo.productionready.io/#/register",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
