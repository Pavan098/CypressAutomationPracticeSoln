class Shop
{

    getShopCheckout()
    {
        return cy.get("button[class='btn btn-success']")
    }

    getCountry()
    {
        return cy.get('#country')
    }

    getSelectCountry()
    {
        return cy.get('.suggestions > ul > li > a')
    }

    getPurchase()
    {
        return cy.get("input[value='Purchase']")
    }

    getChecked()
    {
        return cy.get('#checkbox2')
    }

    getSuccessMessage()
    {
        return cy.get("div[class='alert alert-success alert-dismissible']")
    }

    getAmount()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotalAmount()
    {
        return cy.get('tr td.text-right')
    }
}

export default Shop