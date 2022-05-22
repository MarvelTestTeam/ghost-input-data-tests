const datapool = require("./data/A_PRIORI_DATA_TAGS.json");
cy.faker = require('faker')

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
  
    it('PR005', () => {
      cy.contains(('Tags')).click();  
      cy.screenshot(); 
      cy.contains(('New tag')).click();
      cy.screenshot(); 
      cy.get('#tag-name').type(datapool[0].tag_name);
      cy.screenshot();
      cy.get('.input-color > .gh-input').type(datapool[0].tag_color);
      cy.screenshot();           
      cy.get('#tag-description').type(cy.faker.lorem.words(150));
      cy.screenshot();
      cy.contains('Save').click();
      cy.screenshot();
      cy.contains(('Tags')).click();
      cy.screenshot();
      cy.get('.modal-footer > .gh-btn-red > span').click();
      cy.screenshot();
    })  
  })