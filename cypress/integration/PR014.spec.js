const datapool = require("./data/A_PRIORI_DATA_TAGS.json");

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3002/ghost/#/signin');
      cy.screenshot();
      cy.get('input[name="identification"]').type('misopruebasautomatizadas@gmail.com');
      cy.screenshot();
      cy.get('input[name="password"]').type('Asdfg12345!');
      cy.screenshot();
      cy.xpath("//span[.='Sign in →']").click();
      cy.wait(8000)
      cy.screenshot();
    })
  
    it('PR014', () => {
      cy.contains('Tags').click();  
      cy.wait(8000)
      cy.screenshot(); 
      cy.contains('New tag').click();
      cy.wait(8000)
      cy.screenshot(); 
      cy.get('#tag-name').type(datapool[4].tag_name);
      cy.wait(8000)
      cy.screenshot();
      cy.xpath('/html/body/div[2]/div/main/section/form/div[2]/section/div[2]/div[1]/button/span').click();
      cy.wait(8000);
      cy.screenshot();
      cy.get('#twitter-title').type(datapool[4].tag_twitter_card.twitter_title);
      cy.wait(8000);
      cy.screenshot();
      cy.contains('Save').click();
      cy.wait(8000)
      cy.screenshot();
      cy.contains('Tags').click();
      cy.wait(8000)
      cy.screenshot();
    })  
  })