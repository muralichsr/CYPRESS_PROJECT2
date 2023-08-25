
import data from "../fixtures/addjobtitle.json"
import logindata from "../fixtures/login.json"

describe('Verify add job functionality', () => { /* Test suite */

    it('verify adding job title with mandatory inputs', () => {  /* Test case */

        //cy.visit('/web/index.php/auth/login')
        //cy.get("input[name='username']").type("Admin")
        //cy.get("input[name='password']").type("admin123")
        //cy.get("button[type='submit']").click()

        cy.login(logindata.username,logindata.password)

        cy.contains("Dashboard").should("be.visible") /* asertion statement */

        cy.contains("Admin").click()

        cy.contains("Job").click()

        cy.contains("Job Titles").click()

        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()

        let r = (Math.random()+1).toString(36).substring(7);

        cy.get("input[class='oxd-input oxd-input--active']").last().type(data.jobtitle+r) /* .last() is used as 2 locators are found and using here the last*/

        cy.get("textarea[placeholder='Type description here']").type(data.jobdescription)

        cy.get("button[type='submit']").click()

        cy.contains("Successfully Saved").should("be.visible") /* asertion statement */


    })
  })