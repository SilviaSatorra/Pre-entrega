const constantes = require('../constants') 
export class RegisterPage{
    constructor() {

        this.registerToggle = '#registertoggle';
    }


    dobleClickRegisterToggle() {
        cy.get(this.registerToggle,{timeout: constantes.TIMEOUT}).dblclick()
    }
}