/// <reference types="Cypress" />

it('API Test case using cy.request method', function()
    {

        //using cy.request method we will testing the api
       cy.request('POST','http://216.10.245.166/Library/Addbook.php',{

       "name":"Pavan's book",
       "isbn":"abe",
       "aisle":"890",
       "author":"TTT"
       }).then(function(response)
       {
            expect(response.body).to.have.property('Msg','successfully added')
            expect(response.status).to.eq(200)
       }) 

    })