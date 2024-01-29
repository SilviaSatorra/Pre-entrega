const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pufv4d",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://pushing-it.vercel.app/',
    whatchForFileChanges: false,
    defaultCommandTimeout: 30000
  },

  env: {
    "usuario": "pushingit",
    "password": "123456!"

  },
});
