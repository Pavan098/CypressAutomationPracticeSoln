// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('addtocart', (productname) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productname))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
         })
 })

 //Login for https://rahulshettyacademy.com/client/dashboard/dash

Cypress.Commands.add('LoginDashboard',()=>{
    cy.request('POST','https://rahulshettyacademy.com/api/ecom/auth/login',{userEmail: "luxorplus1@gmail.com", userPassword: "Oneplus20908"})
    .then(function(response){
        expect(response.status).to.eq(200)
        cy.log(response.body.token)
        //setting global environment variable so that it can be used anywhere
        Cypress.env('token',response.body.token)
    })
})

Cypress.Commands.add('FindExactProduct',()=>{
    cy.get('@productLocator').find('.product').find('.product-name').each(($el,index,$list) =>
    {
        const textveg=$el.find('h4.product-name').text()
        if(textveg.includes('Cashews'))
        {
           //not working
            cy.wrap($el).find('button').click()
        }
    })
})

Cypress.Commands.add('ClickOnProductName',()=>{
    cy.get('.products').find('.product').each(($el, index, $list) => {
        let textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews')){
         cy.wrap($el).find('button').click()
        }
     })
})

Cypress.Commands.add('FindLogoText',()=>{
    cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
})

Cypress.Commands.add('CheckTheBox',(checkboxoption,checkbox)=>{
    cy.get(checkboxoption).check().should('be.checked').and('have.value',checkbox)

})

Cypress.Commands.add('UnCheckTheBox',(checkboxoption,checkbox)=>{
    cy.get(checkboxoption).uncheck().should('not.be.checked').and('have.value',checkbox)

})

Cypress.Commands.add('DropdownSelect',(Option)=>{
    cy.get('#dropdown-class-example').select(Option).should('have.value',Option)

})

Cypress.Commands.add('CheckRadioBtn',(inputvalue,radio)=>{
    cy.get(inputvalue).click().should('be.checked').and('have.value',radio)
})

Cypress.Commands.add('UnCheckRadioBtn',(inputvalue,radio)=>{
    cy.get(inputvalue).should('not.be.checked').and('have.value',radio)
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })