describe('Validar funcionamento da aba de Novidades do site Livraria', () => {
  beforeEach(() => {
    cy.visit('/qa_auto/livraria/')
  })

  it('Deve incluir item no carrinho de compras', () => {
    cy.direcionarTelaNovidades()
    cy.botaoPrimeiroItem()
  })
})

describe('Validar funcionamento de login', () => {
  it('Devo realizar login com sucesso', () => {
    cy.realizarLogin('tomsmith')
    cy.loginConcluido()
    cy.get('#flash').should('be.visible')
  })
})

describe('Validar funcionamento de pushs e pop up', () => {
  it('Devo aceitar pop up', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get(':nth-child(2) > button').click()
    cy.get('#result').should('be.visible')
    cy.get('#result').should('contain', 'You clicked: Ok')
  })

  it('Devo esconder elemento', () => {
    cy.visit('http://the-internet.herokuapp.com/disappearing_elements')
    cy.get(':nth-child(1) > a').invoke('hide')
    cy.get(':nth-child(1) > a').should('not.be.visible')
  })

  it('Devo visualizar push de alerta', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    cy.get(':nth-child(1) > button').click()
    cy.get('#result').should('not.be.visible')
    cy.get('#result').should('contain', 'You successfully clicked an alert')
  })
})
