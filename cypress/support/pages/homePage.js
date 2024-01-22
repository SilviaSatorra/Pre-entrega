const constantes = require('../constants') 
export class HomePage{
  
    constructor(){
       this.onlineshoplink = '#onlineshoplink'
    }
 
    clickOnlineshoplink(){
     cy.get(this.onlineshoplink).click();
    }
 }

 