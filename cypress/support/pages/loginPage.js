const constantes = require('../constants')

export class LoginPage {


    constructor() {
        this.userInput = '#user';
        this.passInput = 'input#pass';
        this.loginButton = '#submitForm';
    }

    ingresarUsuario(usuario) {
        cy.get(this.userInput, { timeout: constantes.TIMEOUT * 2 }).type(usuario)
    }

    ingresarPassword(pass) {
        cy.get(this.passInput).type(pass)
    }

    clickLogin() {
        cy.get(this.loginButton, { timeout: constantes.TIMEOUT * 2 }).click()
    }
}