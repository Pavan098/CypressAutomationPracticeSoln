/// <reference types="Cypress" />

it('API Test case for intercepting the API', function()
    {

        //Visiting the website on which the API is to be intercepted
        cy.visit(Cypress.env('url')+"angularAppdemo/")

        //Intercepting the API using cy.intercept method
        //cy.intercept({requestobject},{responseobject},routerhandler which changes the requests)
        //here req is resolving the promise for url change and then it will continue using req.continue
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>
        {
        req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=test'
        
        req.continue((res)=>{
            //expect(res.statusCode).to.equal(403)

        })
        }
        ).as('requestmock')

        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@requestmock')

    })