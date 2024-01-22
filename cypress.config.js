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
      
    env:{
      "usuario": "pushingit",
      "password": "123456!"  //Para ejecutar por consola teniendo asignado el valor acá:
                            //  npx cypress run --spec 'cypress/e2e/compras-web.cy.js'
     // "password": " "    //así es si voy a ejecutar por consola el login para cuidar la seguridad del pass
                        //En este caso se ejecutaría por consola así:
                        //    npx cypress run --spec 'cypress/e2e/fixture.cy.js' --env password="123456!"
                        // Tambien puede ser sin  las comillas en el valor de la variable:
                        //npx cypress run --spec 'cypress/e2e/compras-web.cy.js' --env password=123456!

     //probar estas opciones de ejecucion una vez que tenga más armado el proyecto 

  },
});
