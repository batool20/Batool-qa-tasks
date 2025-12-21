/// <reference types="cypress" />
describe('automationExerciseTestCases', () => {

    it('Validate that a new user can successfully register using the "Signup / Login" page.', () => {
        cy.visit("https://automationexercise.com/login")
        cy.findByDataQa('signup-name').type("Batool")
        cy.findByDataQa('signup-email').type("batoolabdallah0112@gmail.com")
        cy.findByDataQa('signup-button').click()
        cy.url().should("eq","https://automationexercise.com/signup")
        // Fill in the registration form
        cy.get("#id_gender2").check()
        cy.findByDataQa('password').type("Batool123!")
        cy.findByDataQa('days').select("19")
        cy.findByDataQa('months').select("September")
        cy.findByDataQa('years').select("2000")
        cy.findByDataQa('first_name').type("Batool")
        cy.findByDataQa('last_name').type("Abdallah")
        cy.findByDataQa('address').type("Jordan Amman")
        cy.findByDataQa('country').select(0)
        cy.findByDataQa('state').type("Ontario")
        cy.findByDataQa('city').type("Amman")
        cy.findByDataQa('zipcode').type("12346")
        cy.findByDataQa('mobile_number').type("0787320114")
        cy.findByDataQa('create-account').click()
        cy.url().should("eq","https://automationexercise.com/account_created")
        cy.findByDataQa('account-created').should("be.visible").and("have.text","Account Created!")
    });
    
    it('Validate that an existing user can log in using valid credentials', () => {
        cy.visit("https://automationexercise.com/login")
        cy.findByDataQa('login-email').type("batoolabdallah09@gmail.com")
        cy.findByDataQa('login-password').type("Batool123!")
        cy.findByDataQa('login-button').click()
        cy.url().should("eq","https://automationexercise.com/")
        cy.get(".navbar-nav li").last().should("contain"," Logged in as Batool")
    });

    it('Validate that the correct results appear when using search bar using valid and invalid product names', () => {
        cy.visit("https://automationexercise.com/products")
        // Valid product name
        cy.get("#search_product").type("Blue Top")
        cy.get("#submit_search").click()
        cy.url().should("eq","https://automationexercise.com/products?search=Blue%20Top")
        cy.get(".features_items .product-image-wrapper").first().contains("Blue Top").should("be.visible")
        // Invalid product name
        cy.get("#search_product").clear().type("InvalidProduct")
        cy.get("#submit_search").click()
        cy.url().should("eq","https://automationexercise.com/products?search=InvalidProduct")
        cy.get('.features_items .product-image-wrapper').should('not.exist')
    });

    it('Validate that a user can add a product to the shopping cart from the product details page.', () => {
        cy.visit("https://automationexercise.com/products")
        cy.get(".features_items .product-image-wrapper .choose").first().click()
        cy.url().should("eq","https://automationexercise.com/product_details/1")
        cy.get('.btn.cart').click()
        cy.get('#cartModal').should("be.visible")
        cy.get("#cartModal .modal-title").should("have.text","Added!")
    });

    it('Validate that a logged-in user can add a review to a product', () => {
        cy.visit("https://automationexercise.com/login")
        cy.findByDataQa('login-email').type("batoolabdallah09@gmail.com")
        cy.findByDataQa('login-password').type("Batool123!")
        cy.findByDataQa('login-button').click()
        cy.get(".navbar-nav li").first().next().click()
        cy.get(".features_items .product-image-wrapper .choose").first().click()
        cy.get('[placeholder="Your Name"]').type("Batool")
        cy.get('[placeholder="Email Address"]').type("batoolabdallah09@gmail.com")
        cy.get('[placeholder="Add Review Here!"]').type("This is a great product!")
        cy.get('#button-review').click()
        cy.get("#review-section .alert-success").should("be.visible").and("contain","Thank you for your review.")
    });

    });