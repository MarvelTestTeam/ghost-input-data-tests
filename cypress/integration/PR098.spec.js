const datapool = require("../integration/data/MOCK_DATA-MOCKAROO_MEMBER_2.json");

describe('Escenarios datos a priori', () => {
  beforeEach(() => {
  })

  it('Escenario 98: Create member with name, email and note lower limit (499 characters)', () => {
    
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
      cy.get('input[id="member-name"]').type(datapool[0].name_member)
      cy.wait(2000)
      cy.get('input[id=member-email]').type(datapool[0].email_member)
      cy.wait(2000)
      cy.get('#member-note').type(datapool[0].note_lower_limit)
      cy.wait(2000)
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
