export class LoginPage {


    constructor() {
        this.userInput = '#user';
        this.passInput = 'input#pass';
        this.loginButton = '#submitForm';
    }

    ingresarUsuario(usuario) {
        cy.get(this.userInput).type(usuario)
    }

    ingresarPassword(pass) {
        cy.get(this.passInput).type(pass)
    }

    clickLogin() {
        cy.get(this.loginButton).click()
    }
}