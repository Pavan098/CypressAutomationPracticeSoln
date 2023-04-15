/// <reference types="Cypress" />

it('API Test case for intercepting the API', function()
    {

        //Visiting the website on which the API is to be intercepted
        cy.visit(Cypress.env('url')+"angularAppdemo/")

        //Intercepting the API using cy.intercept method
        //cy.intercept({requestobject},{responseobject})
        cy.intercept({method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode : 200,
            body : [
                {
                    "book_name": "RobotFramework",
                    "isbn": "984353",
                    "aisle": "982053"
                }]
        }).as('Bookreturndata')  // this is used to as reference variable because we need to wit until cypress intercepts the response , need to resolve the promise after cypress sent the mock the broweser
        
        //Click on Virtual Library Button
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@Bookreturndata')

        //Validation of one book
        cy.get('p').should('have.text','Oops only 1 Book available')



    })