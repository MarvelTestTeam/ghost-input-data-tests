const datapool = require("./data/A_PRIORI_DATA_PROFILE.json");

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
  
    it('PR027', () => {
      cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[1]/div[1]/div/div').click();  
      cy.wait(1000)
      cy.screenshot(); 
      cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click();
      cy.wait(1000)
      cy.screenshot(); 
      cy.get('#user-website').type('{selectAll}');
      cy.get('#user-website').type('{backspace}', {force: true});
      cy.get('#user-website').type(cy.faker.lorem.words(5), {force: true});
      cy.wait(1000)
      cy.screenshot();
      cy.xpath('/html/body/div[2]/div/main/section/div/header/section/button/span').click();
      cy.wait(1000);
      cy.screenshot();
    })  
  })