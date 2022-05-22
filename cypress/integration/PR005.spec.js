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
      cy.xpath("//span[.='Sign in →']").click();
      cy.wait(1000)
      cy.screenshot();
    })
  
    it('PR005', () => {
      cy.contains('Tags').click();  
      cy.wait(1000)
      cy.screenshot(); 
      cy.contains('New tag').click();
      cy.wait(1000)
      cy.screenshot(); 
      cy.get('#tag-name').type(datapool[3].tag_name);
      cy.wait(1000)
      cy.screenshot();
      cy.get('.input-color > .gh-input').type(datapool[3].tag_color);
      cy.wait(1000)
      cy.screenshot();           
      cy.get('#tag-description').type(cy.faker.lorem.words(150));
      cy.wait(1000)
      cy.screenshot();
      cy.contains('Save').click();
      cy.wait(1000)
      cy.screenshot();
      cy.contains('Tags').click();
      cy.wait(1000)
      cy.screenshot();
      cy.get('.modal-footer > .gh-btn-red > span').click();
      cy.wait(1000)
      cy.screenshot();
    })  
  })