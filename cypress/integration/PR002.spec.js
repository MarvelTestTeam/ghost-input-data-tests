/// <reference types="cypress" />
cy.faker = require('faker');
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3002/ghost/#/signin');
      cy.screenshot();
      cy.get('input[name="identification"]').type('misopruebasautomatizadas@gmail.com');
      cy.screenshot();
      cy.get('input[name="password"]').type('Asdfg12345!');
      cy.screenshot();
      cy.get(('[id=ember11]')).click();
      cy.screenshot();
    })
  
    it('PR002', () => {
      cy.contains(('Tags')).click();  
      cy.screenshot(); 
      cy.contains(('New tag')).click();
      cy.screenshot(); 
      cy.get('#tag-name').type(cy.faker.lorem.words());
      cy.screenshot();
      cy.get('.input-color > .gh-input').type(cy.faker.lorem.words());
      cy.screenshot();
      cy.contains(('Tags')).click();
      cy.screenshot();
      cy.get('.gh-btn-red > span').click();
      cy.screenshot();
    })  
  })