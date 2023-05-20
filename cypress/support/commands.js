import body from "../fixtures/massa.json"

require('cypress-xpath')
let emailAcesso = body.user
let senhaAcesso = body.senha

Cypress.Commands.add('incluirNoCarrinho', () => { 
    cy.xpath('/html/body/div/div/div[1]/div[2]/button').click()
})

Cypress.Commands.add('botãoFirstItem', () => {
    cy.get(':nth-child(1) > .book-price > .book-add')
})

Cypress.Commands.add('realizarLogin', (email) => {
    cy.visit('http://the-internet.herokuapp.com/login')
    cy.get('#username').type(email)
    cy.get('#password').type(senhaAcesso)
    cy.get('.radius').click()
})

Cypress.Commands.add('loginRealizadoComSucesso', () => {
    cy.get('#flash').should('be.visible')
    cy.get('.button').should('be.visible')
})
