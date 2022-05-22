/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3002/ghost/#/signin')
        cy.screenshot();
        cy.get('input[name="identification"]').type('misopruebasautomatizadas@gmail.com')
        cy.screenshot();
        cy.get('input[name="password"]').type('Asdfg12345!')
        cy.screenshot();
        cy.xpath("//span[.='Sign in →']").click()

    })

    it('PR061', () => {
        cy.wait(2000);
        cy.contains('Pages').click()
        cy.wait(2000);
        cy.contains('New page').click()
        cy.wait(2000);
        let title = cy.faker.lorem.words(5)
        cy.xpath('//div[@class="flex flex-row"]/section//textarea[@placeholder="Page title"]').type(title)
        cy.wait(2000);
        cy.xpath('//div[@class="flex flex-row"]/section/div[1]/div[1]').click()
        cy.wait(2000);
        cy.contains('Publish').click()
        cy.wait(2000);
        cy.xpath('//span[.="Publish"]').click()
        cy.visit("http://localhost:3002/ghost/#/pages")
        cy.contains(title).should('be.visible')

    })
})