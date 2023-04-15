/// <reference types="Cypress" />

it('API Test case for intercepting the API and asserting the data from UI and aPI as a part of Integration', function()
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
                    "book_name": "Learn Appium Automation with Java",
                    "isbn": "AV111",
                    "aisle": "227"
                },
                {
                    "book_name": "Learn Appium Automation with Java",
                    "isbn": "AV112",
                    "aisle": "227"
                },
                {
                    "book_name": "Learn Appium Automation with Java",
                    "isbn": "aa",
                    "aisle": "11"
                }]
        }).as('Bookreturndata')  // this is used to as reference variable because we need to wit until cypress intercepts the response , need to resolve the promise after cypress sent the mock the broweser
        
        //Click on Virtual Library Button
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@Bookreturndata').then(({request,response})=>{
            
            cy.get('tr').should('have.length',response.body.length+1) 
        })

        //Validation of three book
        //cy.get('tbody').should('have.text','Oops only 3 Book available')



    })