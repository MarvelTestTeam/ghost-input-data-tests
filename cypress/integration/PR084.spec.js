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

    it('PR084', () => {
        cy.wait(2000);
        cy.contains('Pages').click();
        cy.wait(2000);
        cy.contains('New page').click();
        cy.wait(2000);
        let title = cy.faker.lorem.words(5);
        cy.xpath('//div[@class="flex flex-row"]/section//textarea[@placeholder="Page title"]').type(title)
        cy.wait(2000);
        cy.xpath('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div').click()
        cy.wait(2000);
        cy.contains('Publish').click();
        cy.wait(2000);
        cy.contains('Schedule').click();
        cy.wait(2000);
        cy.xpath('//input[@placeholder="YYYY-MM-DD"]').clear()
        cy.wait(2000);
        cy.xpath('//input[@placeholder="YYYY-MM-DD"]').type("2022-06-23")

        cy.contains('button', 'Schedule').click()
        cy.wait(2000);

        //input[@placeholder='YYYY-MM-DD']


        cy.xpath('//div[@class="flex flex-row"]/section//a[@href="#/pages/"]/span').click();
        cy.wait(2000);
        cy.contains(title).should('exist');



    })
})