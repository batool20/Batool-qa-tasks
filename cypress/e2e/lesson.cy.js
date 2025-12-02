/// <reference types="cypress" />

describe('task_Selectors', () => {

    it('Selectors', () => {

        cy.visit("https://demo.productionready.io/#/register")

        // Conduit
        cy.get(".navbar-brand")

        // Home
        cy.get(".nav-item a").first()

        // Sign Up link
        cy.get(".nav-item a").eq(2)

        // Sign Up title
        cy.contains("h1", "Sign up")

        // “Have an account?” link
        cy.get('[ui-sref="app.login"]').last()

        // Username input
        cy.get("[placeholder=Username]")

        // Email input
        cy.get("[placeholder=Email]")

        // Password input
        cy.get("[placeholder=Password]")

        // Sign Up button
        cy.get("[type=submit]")

        // Footer conduit link
        cy.get('[ui-sref="app.home"]').eq(3)

        // Footer attribution text
        cy.get(".attribution")

    });

});
