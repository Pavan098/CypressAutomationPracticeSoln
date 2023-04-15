
/// <reference types="Cypress" />

it('My third Test Case on ui practice',function(){

      cy.visit(Cypress.env('url')+"AutomationPractice/")
         
      // be as a assertion checking the behaviour of the checkbox checking
      //Created a method with paramter which takes id and assertion as inputs
      cy.CheckTheBox('#checkBoxOption1','option1')
      cy.CheckTheBox('#checkBoxOption2','option2')
      cy.CheckTheBox('#checkBoxOption3','option3')
      //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

       // be as a assertion checking the behaviour of the checkbox unchecking
       //cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
      cy.UnCheckTheBox('#checkBoxOption1','option1')
      cy.UnCheckTheBox('#checkBoxOption2','option2')
      cy.UnCheckTheBox('#checkBoxOption3','option3')
      
      //checking multiple checkboxes at a time
      cy.get('input[type="checkbox"]').check(['option2','option3'])

      //Dropdown practise //value
      //cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
      cy.DropdownSelect('option1','option1')
      cy.DropdownSelect('option2','option2')
      cy.DropdownSelect('option3','option3')
      
      //index
      cy.get('#dropdown-class-example').select(1).should('have.value','option1');
      //text
      cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');

      //Dynamic Dropdowns
      cy.get('#autocomplete').type('ind')

      cy.get('.ui-menu-item div').each(($el, index, $list) => {
        
         if($el.text() === 'India')
         {
            cy.wrap($el).click()
            
         }
      })
      cy.get('#autocomplete').should('have.value','India')


      //Verify the text is displayed or not
      cy.get('#displayed-text').should('be.visible')

      //click on Hide and verify textbox gets disappeared
      cy.get('#hide-textbox').click().get('#displayed-text').should('not.be.visible')

      //Click on show and verify textbox get appear again
      cy.get('#show-textbox').click().get('#displayed-text').should('be.visible')

      //Radio buttons
      // be as a assertion checking the behaviour of the radio button checking
      //check() will not work in customised  commands hence using click in that
      cy.CheckRadioBtn('input[value="radio1"]','radio1')
      cy.CheckRadioBtn('input[value="radio2"]','radio2')
      cy.CheckRadioBtn('input[value="radio3"]','radio3')
      //cy.get('input[value="radio3"]').check().should('be.checked').and('have.value','radio3')
      
       // be as a assertion checking the behaviour of the checkbox unchecking
       cy.UnCheckRadioBtn('input[value="radio2"]','radio2')
       cy.UnCheckRadioBtn('input[value="radio1"]','radio1')

      //checking multiple checkboxes at a time
      cy.get('.radioButton').check(['radio3','radio1'])

})