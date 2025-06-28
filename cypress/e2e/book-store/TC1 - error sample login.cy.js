// to test report
describe('error sample book store login page', () => {
    before(() => {
        // ignore all javascript errors (ads, analytics, etc.)
        Cypress.on('uncaught:exception', () => false)

        // visit login page only once for all tests
        cy.visit('/login')

    })


    it('tc01 - should display login form elements', () => {
        cy.get('#userName-label').should('be.visible')
        cy.get('#password-label').should('be.visible')
        cy.get('#login').should('exist')
        cy.get('#newUser').should('exist')
        cy.get('.text-center').should('contain', 'Login')
    })

    it('tc02 - valid login', () => {
        cy.get('#userName').type('alicia.tan92')
        cy.get('#password').type('P@ssw0rd8!')
        cy.get('#login').click()

        // assert profile page
        cy.url().should('include', '/profile')
        cy.get('.main-header').should('contain', 'Profile')

        // go back to login for next tests
        cy.visit('/login')
    })

})
