describe('Escenarios datos Presudo-Aleatorios', () => {
    beforeEach(() => {
    })
    
    it('Escenario 116: Pseudo-Aleatorio Create member with note only', () => {
      
      cy.fixture('configuration').then((configuration)  => {
  
        cy.request("GET", "https://my.api.mockaroo.com/members.json?key=a915acb0", {
  
        }).then((datapool) => {
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
          cy.get('#member-note').type(datapool.body[5].note_member, {force: true})
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
    })
  });