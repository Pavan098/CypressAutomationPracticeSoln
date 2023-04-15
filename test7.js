
/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

it('My seventh Test Case on ui practice',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
     //Handling Iframe using cypress  -  installed iframe package
     cy.frameLoaded('#courses-iframe')
     cy.wait(2000)
     cy.iframe().find("a[href='mentorship']").eq(0).click()
     cy.wait(2000)

     cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

})