const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    projectId: "k6nv17",
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "defaultCommandTimeout":20000,
    "pageLoadTimeout":120000,
    // "viewportWidth": 1920, 
    // "viewportHeight": 1080, 
    //"retries": {"openMode": 1, "runMode": 1}
    env: {

      "url2": "www.xyz.com",
      "username": "Admin",
      "password": "admin123"

    },
    "video":true,
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      // implement node event listeners here

  
    },
  },
});
