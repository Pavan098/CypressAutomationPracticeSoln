Feature: Ecommerce End to End Validation

    This feature defines the steps of ecommerce tests
    @Regression
    Scenario: Ecommerce Products Delivery
    Given user navigates to ecommerce page  
    When  user add items to cart 
    And user validates the total prices
    Then user checkouts the items and select the country and validating the success message
    
    @Smoke
    Scenario: Filling the Shop Form
    Given user navigates to ecommerce page
    When user fills up the Form
        |name | gender |
        |test| Male   |
    Then user validates the details of the Form
    And user clicks on Shop button