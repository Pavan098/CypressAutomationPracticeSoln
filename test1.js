
/// <reference types="Cypress" />
import GreenKart from "../PageObject/GreenKart"
describe('My first test',function() // - function block for it
{
    it('My first test case', function()
    {
        const greenkart = new GreenKart()
        
        //test steps
        cy.visit(Cypress.env('url')+"seleniumPractise/#/")
        
        greenkart.getProductSearch()
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4);
        
        //parent child chaining
        cy.get('.products').as('productLocator') // declaring variable and using at different instances
        greenkart.getProductVisible()
       
        //add to cart
        greenkart.getAddtoCart()
        //cy.get('.products').find('.product').find('.product-action').eq(1).click();
        //cy.get('.products').find('.product').find('.product-name').eq(2).contains("ADD TO CART")
        
        //each is used to iterate through each index //not working
        cy.FindExactProduct()
        cy.get('@productLocator').find('.product').find('.product-name').each(($el,index,$list) =>
        {
            const textveg=$el.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
               //not working
                cy.wrap($el).find('button').click()
            }
        })

        // to print logo and in sequence manner using then
        //const ls=cy.get('.brand') - error because cypress does not wait for all steps to execute 
       // ls.text()
       cy.get('.brand').should('have.text','GREENKART') // have .text similiar to length assertion chai library
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })

        //click on Cart 
        cy.get('.cart-icon').click()
        cy.wait(3000)
        cy.get('.cart-preview').find('.action-block').contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })
})