class addJobTitle{

    jobSubMenu(){

        return "Job"
    }

    jobTitleOption(){

        return 'Job Titles'

    }

    addButton(){

        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
    }

    jobTitleInput(){

        return 'input[class="oxd-input oxd-input--active"]'
    }

    jobDescriptionInput(){

        return 'textarea[placeholder="Type description here"]'
    }

    saveButton(){

        return 'button[type="submit"]'
    }

    successMessage(){

        return "Successfully Saved"
    }

    jobTitleErrorMessage(){

        return "Should not exceed 100 characters"
    }


    navigateToAddJobtitle(){

        cy.contains(this.jobSubMenu()).click()

        cy.contains(this.jobTitleOption()).click()

        cy.get(this.addButton()).click()
    }
    addingJobTitle(jobtitle, jobdescription){

        cy.get(this.jobTitleInput()).last().type(jobtitle)

        cy.get(this.jobDescriptionInput()).type(jobdescription)

        cy.get(this.saveButton()).click()

        cy.contains(this.successMessage()).should("be.visible")

    }

}

const jobtitle = new addJobTitle()


export default jobtitle