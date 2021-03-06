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
  
    it('PR032', () => {
      cy.wait(8000);
      cy.xpath('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[1]/a[1]').click()
      cy.xpath('//a[@title="New post"]/span').click()
      cy.screenshot();
      cy.get('.koenig-editor__editor-wrapper').type(cy.faker.lorem.paragraphs(3))
      cy.screenshot();
      let title = cy.faker.lorem.words(5)
      while (title.length < 255) {
        title += ' ' + cy.faker.lorem.words(5)
      }
      cy.xpath("//textarea[@placeholder='Post title']").type(title)
      cy.screenshot();
      cy.contains(('Publish')).click()
      cy.screenshot();
      cy.get(('.gh-publishmenu-footer')).contains('Publish').click()
      cy.screenshot();
      cy.xpath(("//div[@class='modal-footer']/button[2]/span[.='Publish']")).click()
      cy.xpath(("//div[@class='gh-app']/aside/article/div[@class='gh-alert-content']")).should('exist')
      cy.xpath(("//div[@class='gh-app']/aside/article/div[@class='gh-alert-content']")).should('contain','Title cannot be longer than 255 characters.')
      cy.screenshot();
      
    })
  })