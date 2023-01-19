import { el } from './elements'

class HomePage {
    acessar() {
        cy.visit(Cypress.config().baseUrl)
    }

    buscar(text) {
        cy.get(el.lupa).click();
        cy.get(el.campo_busca)
          .should('be.visible')
          .type(text);
        cy.get(el.botao_buscar).click();
    }
}

export default new HomePage()