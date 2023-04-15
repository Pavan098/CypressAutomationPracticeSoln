
/// <reference types="Cypress" />
import HomePage from "../../../PageObject/Home"
import ProductPage from "../../../PageObject/ProductPage"
import Shop from "../../../PageObject/Shop"
import { Given,When,Then,And } from "@badeball/cypress-cucumber-preprocessor";

const home = new HomePage()
const product = new ProductPage()
const shop = new Shop()
let name ;
let gender;

Given('user navigates to ecommerce page',()=>
{
    cy.visit(Cypress.env('url')+"angularpractice/")
})

//When

When('user add items to cart',function ()
{
    home.getShopbtn().click()
    this.data.product.forEach(element => {
        cy.addtocart(element)
    });
    product.getCheckOut().click()
})

Then('user validates the total prices',()=>
{
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
})

Then('user checkouts the items and select the country and validating the success message',()=>
{
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
     
})


//Filling the form  // for data driven using cucumber we use data table using indexes and converting in raw table method

When('user fills up the Form',function(dataTable)
{
    //enter the name 
    name = dataTable.rawTable[1][0] /// declaring the variable as assertion are getting failed so creating variables
    home.getName().type(dataTable.rawTable[1][0])

    //select the male from dropdown
    gender = dataTable.rawTable[1][1]
    home.getselectGender().select(dataTable.rawTable[1][1])

    

})

Then('user validates the details of the Form',()=>{

     //Validate in data binding box same value is being entered as entered in name text field
     home.getTwoWayBinding().should('have.value',name)

      //select the male from dropdown
    home.getselectGender().should('have.value',gender)

    //verfiy the entering text in name field is atleast 2 has min length verify that attribute minlength=2
    home.getName().should('have.attr','minlength','2')

     //verify entrepreneur radio button is disabled
     home.getDisabledRadiobtn().should('be.disabled').and('have.value','option3')
})

Then('user clicks on Shop button',()=>{

    //Click on Shop button and add two or more products and click on add to cart
    //cy.pause() //it is used to pause the tests and debug the tests and then play againfrom dashboard
    home.getShopbtn().click()
})


