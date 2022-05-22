const datapool = require("../integration/data/MOCK_DATA-MOCKAROO_MEMBERS.json");

describe('Escenarios datos a priori', () => {
  beforeEach(() => {
  })

  it('Escenario 94: Create member with note only', () => {
    
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
      cy.contains('New member').click()
      cy.wait(2000)
      cy.get('[disabled]').click({force: true})
      cy.get('#member-note').type(datapool[7].note_member)
      cy.wait(2000)
      cy.get('.gh-main').scrollTo('top')
      cy.wait(2000)
      cy.contains('button', 'Save').click()
      cy.wait(2000)
      cy.get('[disabled]').click({force: true})
      cy.contains('Please enter an email.').should('be.visible')
      cy.wait(2000)     
    })
   
  })




});