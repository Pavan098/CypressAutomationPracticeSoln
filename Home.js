class HomePage
{

    getName()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }

    getselectGender()
    {
        return cy.get('#exampleFormControlSelect1')
    }

    getTwoWayBinding()
    {
        return cy.get("input[name='name']:nth-child(1)")
    }

    getDisabledRadiobtn()
    {
        return cy.get('#inlineRadio3')
    }
    
    getShopbtn()
    {
        return cy.get("a[href='/angularpractice/shop']")
    }
}

export default HomePage; //using export keyword this file will be available in all other files in framework