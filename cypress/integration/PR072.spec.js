const datapool1 = require("./data/A_PRIORI_DATA_PAGES.json");
/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/ghost/#/signin');
        cy.screenshot();
        cy.get('input[name="identification"]').type('misopruebasautomatizadas@gmail.com');
        cy.screenshot();
        cy.get('input[name="password"]').type('Asdfg12345!');
        cy.screenshot();
        cy.xpath("//span[.='Sign in →']").click();

    })

    it('PR072', () => {
        cy.wait(2000);
        cy.contains('Pages').click();
        cy.wait(2000);
        cy.contains('New page').click();
        cy.wait(2000);
        let title = cy.faker.lorem.words(5);
        cy.xpath('//div[@class="flex flex-row"]/section//textarea[@placeholder="Page title"]').type(title)
        cy.wait(2000);
        cy.xpath('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div').type(datapool1[0].title)
        cy.contains('Publish').click();
        cy.wait(2000);
        cy.xpath('//span[.="Publish"]').click();
        cy.wait(2000);
        let title2 = cy.faker.lorem.words(20);
        cy.xpath('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div').clear().type(title2)
        cy.wait(2000);
        cy.contains('Update').click();
        cy.xpath('//div[@id="ember-basic-dropdown-wormhole"]/div/footer/button[2]/span[.="Update"]').click();
        cy.contains('Updated').should('be.visible');


    })
})