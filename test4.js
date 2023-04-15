
/// <reference types="Cypress" />
it('My fourth Test Case on ui practice',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //Alerts and Popups
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //for text assert on alerts and Popups
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //confirm
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Cypres does not handle switching from one window to another window , so removing targetting attribute from
        cy.get('#opentab').invoke('removeAttr','target').click()

        //Asserting the current url using include the string the current url
        cy.url().should('include','rahulshettyacademy')
        cy.wait(2000)
        
        //back to original page using go command browser navigation controls
        cy.go('back')
        cy.url().should('include','AutomationPractice')

        //Forward moving to next page
        cy.wait(2000)
        cy.go('forward')
        cy.url().should('include','rahulshettyacademy')

})