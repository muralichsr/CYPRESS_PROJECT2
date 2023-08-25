import registerdata from '../../fixtures/register.json'

describe('Validate register flow', () => {

    it('validate register with existing user', () => {

        cy.visit('https://shop.demoqa.com/my-account/')

        cy.get("#reg_username").type(registerdata.username)

        cy.get("#reg_email").type(registerdata.emailaddress)

        // cy.get('#reg_password').type(registerdata.weakpassword);
    
        // cy.get('button[name="register"]').should('be.disabled')

        // //or

        // cy.get('button[name="register"]').should('have.attr', 'disabled', "disabled")

        cy.get('#reg_password').clear()

        cy.get('#reg_password').type(registerdata.strongpassword);

        cy.get('button[name="register"]').click()
        cy.get('#username').should('have.attr', 'value', registerdata.username)

        //or

        cy.get('#username').should('have.value', registerdata.username)

      
    })

})