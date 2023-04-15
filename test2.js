
/// <reference types="Cypress" />
import GreenKart from "../PageObject/GreenKart"
it('My second Test Case',function(){

   const greenkart = new GreenKart()
        
         //Env Variable
        cy.visit(Cypress.env('url')+"seleniumPractise/#/")
        
        //Search
        greenkart.getProductSearch()

        cy.wait(2000)
        
        cy.ClickOnProductName()
        })