describe('Validate Login Functionality', () => {

     it('Verify login with valid input details', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get("input[name='username']").type(Cypress.env("username"))
        cy.get("input[name='password']").type(Cypress.env("password"))
        cy.get("button[type='submit']").click()

        cy.contains("Dashboard").should("be.visible") /* asertion statement */
    }) 

    it('Verify login with valid username and invalid password', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("xxxxxx")
        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible") /* asertion statement */

    })
    
    it('Verify login with invalid username and valid password', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get("input[name='username']").type("xxxx")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible") /* asertion statement */

    })

    it('Verify login with invalid username and invalid password', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get("input[name='username']").type("xxxx")
        cy.get("input[name='password']").type("xxxxxx")
        cy.get("button[type='submit']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible") /* asertion statement */

    })

})