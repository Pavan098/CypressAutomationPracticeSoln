before('This should be executed first',function()
{
    //fixture call here
    cy.fixture('example').then(function(data)
    {
        this.data=data
    })
})