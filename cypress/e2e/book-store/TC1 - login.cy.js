describe('Book Store Login Page', () => {
    beforeEach(() => {
        // ignore all javascript errors (ads, analytics, etc.)
        Cypress.on('uncaught:exception', () => false)

        // go to the login page
        cy.visit('/login')
    })

    it('TC01 - Login page: should display login form elements correctly', () => {
        cy.get('#userName-label').should('be.visible')
        cy.get('#password-label').should('be.visible')
        cy.get('#login').should('exist')
        cy.get('#newUser').should('exist')
        cy.get('.text-center').should('contain', 'Login')
    })

    it('TC02 - Login with valid data: should able to login', () => {
        cy.get('#userName.form-control').type('alicia.tan92')
        cy.get('#password.form-control').type('P@ssw0rd8!')
        cy.get('#login').click()
        cy.url().should('include', '/profile')
    })

    it('TC03 - Login with invalid data: should show error', () => {
        cy.get('#userName').type('wrong.user')
        cy.get('#password').type('wrongPassword123')
        cy.get('#login').click()
        cy.get('#name')
            .should('be.visible')
            .and('contain', 'Invalid username or password!')
            .and('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('TC04 - Login with empty form: should show error', () => {
        cy.get('#userName').click()
        cy.get('#password').click()
        cy.get('#login').click()
        // check if both inputs have the 'is-invalid' class (red highlight)
        cy.get('#userName').should('have.class', 'is-invalid')
        cy.get('#password').should('have.class', 'is-invalid')
    })

})
