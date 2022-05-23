describe('Escenarios datos Presudo-Aleatorios', () => {
    beforeEach(() => {
    })
    
    it('Escenario 118: Pseudo-Aleatorio Edit email and note firt member', () => {
      
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
          cy.get('table[class="gh-list"]').first().click()
          cy.wait(2000)   
          cy.get('input[id=member-email]').clear().type(datapool.body[7].email_member, {force: true})
          cy.wait(2000)
          cy.get('#member-note').clear().type(datapool.body[7].note_member, {force: true})
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