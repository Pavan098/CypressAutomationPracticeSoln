
/// <reference types="Cypress" />
import HomePage from "../PageObject/Home"
import ProductPage from "../PageObject/ProductPage"
import Shop from "../PageObject/Shop"

//Hooks examples like test ng annotations examples
describe('Hook test examples',function() // - function block for it
{
    before('This should be executed first',function()
    {
        //fixture call here
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
    
    beforeEach('This should before each and every test case',function()
    {
     cy.log('BEFORE EACH AND EVERY TESTS')
    })
    
    afterEach('This should after each and every tests',function()
    {
     cy.log('AFTER EACH AND EVERY TESTS')
    })
    
    after('This should after all tests',function()
    {
     cy.log('AFTER ALL TESTS')
    })
    
    it('My eigth Test Case on angularui practice', function()
    {
        //creating the object of the Home js class
        //to define timeout at spec level 
        //Cypress.config('defaultCommandTimeout',8000)
        const home = new HomePage()
        const product = new ProductPage()
        const shop = new Shop()
        
        //calling envrionmental variables using .env variables
        
        cy.visit(Cypress.env('url')+"angularpractice/")
        
        //enter the name 
        home.getName().type(this.data.name)

        //Validate in data binding box same value is being entered as entered in name text field
        home.getTwoWayBinding().should('have.value',this.data.name)

        //select the male from dropdown
        home.getselectGender().select(this.data.gender).should('have.value','Female')

        //verfiy the entering text in name field is atleast 2 has min length verify that attribute minlength=2
        home.getName().should('have.attr','minlength','2')

        //verify entrepreneur radio button is disabled
        home.getDisabledRadiobtn().should('be.disabled').and('have.value','option3')

        //Click on Shop button and add two or more products and click on add to cart
        //cy.pause() //it is used to pause the tests and debug the tests and then play againfrom dashboard
        home.getShopbtn().click()

        //add custom command in support folder created with name addtocard and param as product name
        this.data.product.forEach(element => {
            cy.addtocart(element)
        });

        //Click on checkout btn
        product.getCheckOut().click()
        
        //Verify the Amount and total amount
        var sum=0
        shop.getAmount().each(($el, index, $list) => {

            const text=$el.text()
            var txt = text.split(' ')
            txt = txt[1].trim()
            sum=sum+Number(txt)

         }).then(function()
         {
            cy.log(sum)
            //another way to assert the value
            shop.getTotalAmount().should('contain.text',sum)
         })

         shop.getTotalAmount().then(function(element)
         {
            const text=element.text()
            var txt = text.split(' ')
            txt = txt[1].trim()
            expect(Number(txt)).to.equal(sum)
         })
         
        //It navigates to shop Page and click on Checkout on shop page
        shop.getShopCheckout().click()

        //Enter the Country for delivery and select the country for delivery
        shop.getCountry().type('India')
        
        shop.getSelectCountry().each(($el, index, $list) => {
        
            if($el.text() === 'India')
            {
               cy.wrap($el).click()
               
            }
         })

         shop.getCountry().should('have.value','India')

         //check the checkbox and click on purchase and verify the message
         shop.getChecked().click({force: true})
         shop.getPurchase().click()
         
         shop.getSuccessMessage().should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
         shop.getSuccessMessage().then(function(element)
         {
            const msg = element.text()
            expect(msg.includes('Success')).to.be.true
            
         })
    })

   /* it('Test case example on ui practice', function()
    {
        cy.log('second test case')
    })
    
    it(' 2 Test case example on ui practice', function()
    {
        cy.log('third test case')
    })*/
})