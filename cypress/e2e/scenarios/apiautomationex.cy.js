///<reference types="cypress"/>

import  postdata from '../../fixtures/body.json'

describe('Automation - API Automation - GET. PUT, POST and Delete Methods', function () {

  var x ;

   it("Sample API Test",()=>{

    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) =>{

      expect(response.status).to.equal(200)

      expect(response.body.page).to.equal(2)

      expect(response.body.data[0].email).to.equal("michael.lawson@reqres.in")
    
    
    })

   })

  it('Cypress Test Case - Understanding GET Method', function () {

    cy.request({

      method:'GET', 
      url: 'https://reqres.in/api/users?page=2',

      Headers:{

        //headers can declare here

      },
      body:{

        //body details can declare here
      }
   
      

    }).then((response) => {

      expect(response.status).equal(200);
      //comment for demo

      expect(response.body.data[0].id).equal(7);
       expect(response.body.data[5].email).equal("rachel.howell@reqres.in");

       expect(response.body.data[0].first_name).equal("Michael");

       expect(response.body.support.url).equal("https://reqres.in/#support-heading");

       expect(response.body).to.have.property('total_pages');
       expect(response.body).to.have.property('total_pages', 2);

       expect(response.body).to.have.property("page", 2)

       expect(response.body).to.have.property("total", 12)
       expect(response.body).to.have.property("per_page", 6)
    })

  })

  it('Cypress Test Case - Understanding GET Method', function () {

    cy.request('GET', 'https://reqres.in/api/users/2').then((response) => {

      expect(response.status).equal(200);
      //comment for demo

      expect(response.body.support.url).equal("https://reqres.in/#support-heading");

      expect(response.body.data.id).equal(2)
      expect(response.body.data.email).equal("janet.weaver@reqres.in")
    })

  })
  // it('Cypress Test Case - Understanding POST Method', function () {


  //     const payload ={
  //         "name": "Raju",
  //         "job": "Trainer"
  //     }
  //     cy.request('POST', 'https://reqres.in/api/users', payload).then((response)=>{

  //       expect(response.status).equal(201);
  //       expect(response.body).to.have.property("name", "Raju")

  //       expect(response.body).to.have.property("job", "Trainer")
  //     })

  //   })

  it.only('Cypress Test Case - Understanding POST Method', function () {



    // const payload = {
    //   "name": "Raju",
    //   "job": "Trainer"
    // }

    cy.request('POST', 'https://reqres.in/api/users', postdata).then((response) => {

      expect(response.status).equal(201);
      expect(response.body).to.have.property("name", "Raju")

      expect(response.body).to.have.property("job", "Trainer")

       var time = JSON.stringify(response.body.createdAt)
       var x = JSON.stringify(response.body.id)

      cy.log(time)
      cy.log(x)

       cy.writeFile('cypress/fixtures/module1/test10.json', { "Id": x });

    })

  })

  it('Cypress Test Case - Understanding PUT Method', function () {

    const payload = {
      "name": x,
      "job": "Trainer"
    }

    cy.request('PUT', 'https://reqres.in/api/users/2', payload).then((response) => {

      expect(response.status).equal(200);
      expect(response.body).to.have.property("name", "Raju")

      expect(response.body).to.have.property("job", "Trainer")

      let updatedtime = JSON.stringify(response.body.updatedAt)

      cy.log(updatedtime)
    })

  })


  it('Cypress Test Case - Understanding DELETE Method', function () {


    cy.request('DELETE', 'https://reqres.in/api/users/2').then((response) => {

      expect(response.status).equal(204);

    })

  })


})