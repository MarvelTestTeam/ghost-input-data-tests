/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3002/ghost/#/signin')
      cy.screenshot();
      cy.get('input[name="identification"]').type('misopruebasautomatizadas@gmail.com')
      cy.screenshot();
      cy.get('input[name="password"]').type('Asdfg12345!')
      cy.screenshot();
      cy.get(('[id=ember11]')).click()
      cy.screenshot();
    })
  
    it('PR001', () => {
      cy.contains(('Tags')).click()
      cy.screenshot();      
      cy.contains(('New tag')).click()
      cy.screenshot(); 
    })
  
  
  })