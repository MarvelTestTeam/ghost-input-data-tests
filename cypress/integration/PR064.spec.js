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

    it('PR064', () => {
        cy.wait(3000);
        cy.contains('Pages').click()
        cy.wait(3000);
        cy.contains('New page').click()
        cy.wait(3000);
        let title = cy.faker.lorem.words(5)
        while (title.length < 256) {
            title += ' ' + cy.faker.lorem.words(5)
        }
        cy.xpath('//div[@class="flex flex-row"]/section//textarea[@placeholder="Page title"]').type(title)
        cy.wait(3000);
        cy.xpath('//button[@title="Settings"]/span').click()
        cy.wait(3000);
        cy.xpath('//button[@title="Settings"]/span').click()
        cy.wait(3000);
        cy.xpath('//section[@class="flex"]/div[2]/div[@role="button"]/span').should('not.exist')

    })
})