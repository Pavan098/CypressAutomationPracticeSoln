/// <reference types="Cypress" />

it('Injecting session token in session storage by using API call', function()
    {

        //created custom method and then before visiting the url injecting the token in that using js function window 
        cy.LoginDashboard().then(function()
        {
            cy.visit('https://rahulshettyacademy.com/client/',{
                //options button scenarios
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })

        //Click on add to cart
        cy.get('.card-body button:last-of-type').eq(1).click()

        //Click on final add to cart button
        cy.get("[routerlink*='cart']").click()

        //Click on buy now option
        cy.contains('Checkout').click()

        //Enter on country drpdown to deliver to that country
        cy.get("[placeholder*='Country']").type('Aus')

        cy.get(".ta-results button").each(($el, index, $list) => {
        
            if($el.text() === "Australia")
            {
                
                cy.wrap($el).click()
               
            }
         })

         //Application issue as it's not clicking their
         //Click on Place Order
         //cy.get('.action__submit').click()

         cy.visit('https://rahulshettyacademy.com/client/dashboard/thanks?prop=%5B%226427d968568c3e9fb144e368%22%5D') 

         //Download button of csv
         cy.contains('Click To Download Order Details in CSV').click()
        
    })