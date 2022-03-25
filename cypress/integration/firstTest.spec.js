/// <reference types="cypress" />

describe.skip("First Suit", () => {
    it("First test", () => {
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Forms Layouts').click()

        // by Tag Name
        cy.get('input')

        // by ID
        cy.get('#inputEmail1')

        // by Class Name
        cy.get('.input-full-width')

        //by Attribute
        cy.get('[placeholder]')

        // by Attribute Name and Value
        cy.get('[placeholder="Email"]')

        // by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by two different attributes
        cy.get('[placeholder="Email"][type="email"]')

        // by Tag Name, Attribute with value, ID and Class Name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // (Recommended) personalized selector
        cy.get('[data-cy="inputEmail1"]')

        // cy.get('')

    });
});

describe("First Suit", () => {
    it("First test", () => {
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

       cy.get('[data-cy="signInButton"]')
       cy.contains("Sign in")

       cy.contains('[status="warning"]','Sign in')

    });
});