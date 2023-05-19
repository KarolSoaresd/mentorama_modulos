require('cypress-xpath')

describe('Validar funcionamento do formulário', () => {

  beforeEach(() => {
    cy.visit('https://signup.heroku.com/login')
  })

  it('Realizar cadastro no site', () => {
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
  })
})

describe('Realizar validações de campos mais distintos', () => {
  it('Testando check', () => {
    cy.visit('http://the-internet.herokuapp.com/checkboxes')
    cy.xpath('//*[@id="checkboxes"]/input[1]').check().should('be.checked')
    cy.xpath('//*[@id="checkboxes"]/input[2]').uncheck().should('not.be.checked')
    cy.url().should('be.equal', 'http://the-internet.herokuapp.com/checkboxes')
  })

  it('Upload de arquivos', () => {
    cy.visit('http://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    cy.get('#file-submit').click()
    cy.get('h3').should('be.visible')
    cy.xpath('//*[@id="uploaded-files"]').should('contain', 'example.json')


  })
})