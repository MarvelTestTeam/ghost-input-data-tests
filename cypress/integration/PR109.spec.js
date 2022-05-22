const {faker} = require('@faker-js/faker');

describe('Escenarios datos aleatorios', () => {
  beforeEach(() => {
  })

  it('Escenario 109: Edit email and delete name first member', () => {
    
    cy.fixture('configuration').then((configuration)  => {
      cy.visit(configuration.URL_GHOST)
      cy.wait(3000)

      var email = configuration.USER
      var password = configuration.PASSWORD

      cy.get('input[name="identification"]').type(email)
      cy.get('input[name="password"]').type(password)
      cy.get(('[id=ember11]')).click()
      cy.wait(3000);
      cy.contains('a', 'Members').click()
      cy.wait(2000)
      cy.get('table[class="gh-list"]').last().click()
      cy.wait(2000)   
      cy.get('.gh-main').scrollTo('top')
      cy.get('input[id=member-email]').clear().type(faker.internet.email(), {force: true})
      cy.wait(2000)
      cy.get('input[id="member-name"]').clear()
      cy.get('.gh-main').scrollTo('top')
      cy.wait(2000)
      cy.contains('button', 'Save').click()
      cy.wait(2000)
      cy.get('[disabled]').click({force: true})
      cy.visit(configuration.URL_GHOST+"/#/members")
      cy.wait(2000) 
    })
  })

}) 