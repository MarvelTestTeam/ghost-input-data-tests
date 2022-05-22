const datapool = require("../integration/data/A_PRIORI_DATA_TAGS.json");

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3002/ghost/#/signin');
      cy.screenshot();
      cy.get('input[name="identification"]').type('misopruebasautomatizadas@gmail.com');
      cy.screenshot();
      cy.get('input[name="password"]').type('Asdfg12345!');
      cy.screenshot();
      cy.get('[id=ember11]').click();
      cy.wait(1000)
      cy.screenshot();
    })
  
    it('PR003', () => {
      cy.contains('Tags').click();  
      cy.wait(1000)
      cy.screenshot(); 
      cy.contains('New tag').click();
      cy.wait(1000)
      cy.screenshot(); 
      cy.get('#tag-name').type(datapool[1].tag_name);
      cy.wait(1000)
      cy.screenshot();
      cy.get('.input-color > .gh-input').type(datapool[1].tag_color);
      cy.wait(1000)
      cy.screenshot();
      cy.wait(1000)
      cy.contains('Save').click();
      cy.wait(1000)
      cy.screenshot();
      cy.contains('Tags').click();
      cy.wait(1000)
      cy.screenshot();
    })  
  })