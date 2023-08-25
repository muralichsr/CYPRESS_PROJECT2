
import logindata from "../../fixtures/login.json"
import data from "../../fixtures/addjobtitle.json"
import login from "../../pageobject/loginpage.po"
import dashboard from "../../pageobject/dashboard.po"
import jobtitle from "../../pageobject/addjobtitle.po"

describe('Verify add job functionality', () => { /* Test suite */

    it('verify adding job title with mandatory inputs', () => {  /* Test case */

        cy.visit('/web/index.php/auth/login')
        //cy.get(login.usernameInput()).type("Admin")
        //cy.get(login.passwordInput).type("admin123")
        //cy.get(login.loginButton).click()
        login.loginwithcreds(logindata.username,logindata.password)

        cy.contains(dashboard.dashBoardMenu).should("be.visible") /* asertion statement */

        cy.contains(dashboard.adminMenu()).click()

        //cy.contains(jobtitle.jobSubMenu()).click()

       // cy.contains(jobtitle.jobTitleOption()).click()

        //cy.get(jobtitle.addButton()).click()

        jobtitle.navigateToAddJobtitle()

        let r = (Math.random()+1).toString(36).substring(7);

        //cy.get(jobtitle.jobTitleInput()).last().type(data.jobtitle+r) /* .last() is used as 2 locators are found and using here the last*/

        //cy.get(jobtitle.jobDescriptionInput()).type(data.jobdescription)

        //cy.get(jobtitle.saveButton()).click()

        //cy.contains(jobtitle.successMessage()).should("be.visible") /* asertion statement */
        jobtitle.addingJobTitle(data.jobtitle+r,data.jobdescription)


    })
  })