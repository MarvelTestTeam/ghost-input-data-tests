describe('Escenarios datos Presudo-Aleatorios', () => {
    beforeEach(() => {
    })
    
    it('Escenario 120: Pseudo-Aleatorio Edit note to last member', () => {
      
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
          cy.wait(2000)
          cy.get('table[class="gh-list"]').last().click()
          cy.wait(2000)   
          cy.get('#member-note').clear().type(datapool.body[9].note_member, {force: true})
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

})