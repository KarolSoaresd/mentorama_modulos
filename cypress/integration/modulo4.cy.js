
describe('Validar funcionamento da aba de Novidades do site', () => {

    beforeEach(() => {
        cy.visit('pages/news.html')
    })

    it('Deve incluir item no carrinho', () => {
        cy.incluirNoCarrinho()
        cy.botãoFirstItem().should('contain','PAGAMENTO')
    })
})

describe('Realizar login e cadastro', () => {
    it('Devo realizar login com dados corretos', () => {
        cy.realizarLogin('tomsmith')
        cy.loginRealizadoComSucesso()
    })

    it.skip('Realizar cadastro no site', () => {
        cy.visit('https://signup.heroku.com/login')
        // cy.clock()
        cy.wait(2000)
        cy.get('#onetrust-accept-btn-handler').click()
        cy.contains('First name').type('Karol')
        cy.get('#first_name').clear()
        cy.contains('First name').type('Karol')
        cy.xpath('//*[@id="last_name"]').type('Santos')
        cy.get('#email').type('karol@mentorama.com')
        cy.get('#company').type('Mentorama')
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
        cy.get('#role').select(3)
        cy.get('#self_declared_country').select('Brazil')
        cy.xpath('//*[@id="main_programming_language"]').select(2)
        cy.get(':nth-child(14) > .btn').click()
        cy.get('.signup > :nth-child(1)').should('be.visible')
        // cy.tick(3000)
    })
})

describe('Validar push e popup de confirmacoes', () => {
    it('Devo esconder elemento', () => {
        cy.visit('http://the-internet.herokuapp.com/disappearing_elements')
        cy.get(':nth-child(1) > a').invoke('hide')
        cy.get(':nth-child(1) > a').should('not.be.visible')
    })

    it('Devo aceitar pop-up', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('contain', 'You clicked: Ok')
    })
    it('Devo visualizar push de alerta', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
    })

})