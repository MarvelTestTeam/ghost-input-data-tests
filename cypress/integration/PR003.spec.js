const datapool = require("../integration/data/A_PRIORI_DATA_TAGS.json");

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
  
    it('PR003', () => {
      cy.contains(('Tags')).click();  
      cy.screenshot(); 
      cy.contains(('New tag')).click();
      cy.screenshot(); 
      cy.get('#tag-name').type(datapool[0].tag_name);
      cy.screenshot();
      cy.get('.input-color > .gh-input').type(datapool[0].tag_color);
      cy.screenshot();
      cy.contains('Save').click();
      cy.screenshot();
      cy.contains(('Tags')).click();
      cy.screenshot();
    })  
  })