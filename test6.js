
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

it('My sixth Test Case on ui practice',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //Handling Child windows using removing target attribute and another way is to get the href value and visit in on that link
    //cy.get('#opentab').invoke('removeAttr','target').click()
    //cy.url().should('include','rahulshettyacademy')
    
    cy.get('#opentab').then(function(el) {
    
        const url=el.prop('href')
       cy.visit(url)
     })


     

})