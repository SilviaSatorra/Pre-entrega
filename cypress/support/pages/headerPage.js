const constantes = require('../constants')
export class HeaderPage {

    getUsername(usuario) {
        cy.get(`[id^="user_${usuario}"]`, { timeout: constantes.TIMEOUT })
    }

} 
