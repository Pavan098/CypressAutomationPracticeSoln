
/// <reference types="Cypress" />
it('My fifth Test Case on ui practice',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Web table handling using cypress //css selector using nth child
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        
            const text=$el.text()
            if(text.includes('Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const pricetxt = price.text()
                    expect(pricetxt).to.equal('25')
                })
            }
         })


        //Mouse Hover handling using JQuery // Top and Reload will check for parent attribute so make sure you enter correct id of parent not the super parent
        
        //cy.get('.mouse-hover-content').invoke('show') - normal method by using JQuery function
        cy.contains('Top').click({force: true}) //by forcing directly to true
        cy.url().should('include','top')
        
        //cy.get('#mousehover').invoke('show')
        cy.contains('Reload').click({force: true})
        cy.url().should('not.include','top')


})