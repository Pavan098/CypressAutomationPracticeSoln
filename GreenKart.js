class GreenKart
{
    getProductSearch()
    {
        return  cy.get('.search-keyword').type("ca");
    }

    getProductVisible()
    {
        return cy.get('.product:visible').should('have.length',4);
    }

    getAddtoCart()
    {
        return cy.get('@productLocator').find('.product').eq(2).contains("ADD TO CART").click();
    }

    getLogoName()
    {
        return cy.get('.brand').should('have.text','GREENKART')
    }

    getCartbtn()
    {
       return cy.get('.cart-icon').click()
    }
    
    getCheckoutBtn()
    {
        return cy.get('.cart-preview').find('.action-block').contains('PROCEED TO CHECKOUT').click()
    }

    getPlaceOrder()
    {
        return cy.contains('Place Order').click()

    }
}

export default GreenKart;