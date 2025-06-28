describe('book store login page', () => {
    beforeEach(() => {
        // ignore all javascript errors (ads, analytics, etc.)
        Cypress.on('uncaught:exception', () => false)

        // go to the login page
        cy.visit('/login')
    })

    it('tc01 - login page: should display login form elements correctly', () => {
        cy.get('#userName-label').should('be.visible')
        cy.get('#password-label').should('be.visible')
        cy.get('#login').should('exist')
        cy.get('#newUser').should('exist')
        cy.get('.text-center').should('contain', 'Login')
    })

    it('tc02 - login with valid data: should able to login', () => {
        cy.getUsername().type('alicia.tan92')
        cy.getPassword().type('P@ssw0rd8!')
        cy.get('#login').click()
        cy.url().should('include', '/profile')
    })

    it('tc03 - login with invalid data: should show error', () => {
        cy.getUsername().type('wrong.user')
        cy.getPassword().type('wrongPassword123')
        cy.get('#login').click()
        cy.get('#name')
            .should('be.visible')
            .and('contain', 'Invalid username or password!')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('tc04 - login with empty form: should show error', () => {
        cy.getUsername().click()
        cy.getPassword().click()
        cy.get('#login').click()
        cy.getUsername().should('have.class', 'is-invalid')
        cy.getPassword().should('have.class', 'is-invalid')
    })
})
