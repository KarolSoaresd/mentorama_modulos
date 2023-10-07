import body from "../fixtures/massas.json"
require('cypress-xpath')

let emailAcesso = body.user
let senhaAcesso = body.senha

Cypress.Commands.add('direcionarTelaNovidades', () => {
    cy.get('.menu-main > :nth-child(2) > a').click()
})

Cypress.Commands.add('botaoPrimeiroItem', () => {
    cy.get(':nth-child(1) > .book-price > .book-add')
    cy.xpath('/html/body/div/div/div[1]/div[2]/button').click()
})

Cypress.Commands.add('realizarLogin', (email) => {
    cy.visit('http://the-internet.herokuapp.com/login')
    cy.get('#username').type(email)
    cy.xpath('//*[@id="password"]').type(senhaAcesso)
})

Cypress.Commands.add('loginConcluido', () => {
    cy.get('.radius').click()
})