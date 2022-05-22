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
  
    it('PR042', () => {
      cy.wait(1000);
      cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]').click()
      cy.xpath('//a[@title="New post"]/span').click()
      cy.screenshot();
      let title = cy.faker.lorem.words(5)
      cy.xpath("//textarea[@placeholder='Post title']").type(title).clear()
      cy.screenshot();
      cy.get('.koenig-editor__editor-wrapper').type(cy.faker.lorem.paragraphs(3)).clear()
      cy.screenshot();
      cy.xpath(("//a[@href='#/posts/']/span")).click()
      cy.screenshot();
      cy.xpath(("//section[@class='gh-canvas']/section/ol/li[2]/a[1]/h3[@class='gh-content-entry-title']")).should('exist')
      cy.xpath(("//section[@class='gh-canvas']/section/ol/li[2]/a[1]/h3[@class='gh-content-entry-title']")).should('contain','(Untitled)')
    })
  })