const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pufv4d",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://pushing-it.vercel.app/',  //url nueva 
    whatchForFileChanges: false,  //por defecto viene con valor true Lo podemos poner en false para que 
    //no se ejecute automáticamente cada vez que le damos guardar a 1 archivo de pruebas

    defaultCommandTimeout: 30000
  },

  env: {
    "usuario": "pushingit",
    "password": "123456!"

  },
});
