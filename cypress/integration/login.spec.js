/// <reference types="cypress" />

describe('Logining in TEST', () => {

    afterEach(() => {
        cy.wait(3000)

        if (cy.get('div[data-action="ft-pop-close"]')) {
            cy
            .get('div[data-action="ft-pop-close"] > .icon--close')
            .click({force: true })
        } 
    })

    it('Visit Main Page', () => {
        cy
            .visit('https://www.elephantstock.com/')
            .url().should('include', 'www.elephantstock.com')
    })

    it('Click on my account button', () => {
        cy
            .get('.right-topbar-options > [href="/account/login"]')
            .click()
            .url().should('include', 'account/login')
    })
            // Arnold Guttentak
            // jifate8498@faxapdf.com
            // 12345

    it('Enter data', () => {
        cy
            .get('#CustomerEmail')
            .type('jifate8498@faxapdf.com')

        cy
            .get('#CustomerPassword')
            .type('12345')

        cy
            .get(':nth-child(9) > .btn')
            .click()
    })

    it('Submit data', () => {
        cy
            .url().should('include', '/account')
            .get('.header-topbar').contains('Arnold')
            .get('h1.text-center').contains('My Account')
            .log('Excelent!')
    })

})
