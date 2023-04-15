/// <reference types="Cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User Navigates to Angular App Demo website',()=>{
    cy.visit(Cypress.env('url')+"angularAppdemo/")
})

When('User clicks on Browse Products',()=>{
    cy.contains('Browse Products').click()
})

Then('User clicks on Enable disable buying button',()=>{
    cy.contains('Enable/Disable Buying').click()
})

Then('User clicks on Selenium Availability course and validates the message in alert window',()=>{

    cy.get('body > app-root:nth-child(1) > app-product-details:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(1) > div:nth-child(1) > li:nth-child(1) > app-alert-details:nth-child(2) > button:nth-child(1)').click()

    //for text assert on alerts and Popups
    cy.on('window:alert',(str)=>
    {
        expect(str).to.equal('SeleniumCourse videos are available in your location to purchase')
    })

    //confirm
    /*cy.on('window:confirm',(str)=>
    {
        expect(str).to.equal('SeleniumCourse videos are available in your location to purchase')
    })*/

})