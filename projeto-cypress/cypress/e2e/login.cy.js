///<reference types="cypress"/>

describe('Login', () => {


    it('Realizar login no sistema', () => {
        cy.visit('/')

        cy.get('.icon-user-unfollow').click()

        cy.get('#username').type('vitor2@email.com')
        cy.get('#password').type('Teste*12345678')

        cy.get('.woocommerce-form > .button').click()

    })
    it('Erro login sem senha', () => {
        cy.visit('/')

        cy.get('.icon-user-unfollow').click()
        
        cy.get('#username').type('vitor@email.com')

        cy.get('.woocommerce-form > .button').click()

        cy.contains("Erro: O campo da senha está vazio.")
    })

    it('Erro login sem email', () => {
        cy.visit('/')

        cy.get('.icon-user-unfollow').click()

        cy.get('#password').type('Teste*12345678')

        cy.get('.woocommerce-form > .button').click()

        cy.contains("Erro: Nome de usuário é obrigatório.")
    })

    it('Erro login senha incorreta', () => {
        cy.visit('/')

        cy.get('.icon-user-unfollow').click()
        
        cy.get('#username').type('vitor2@email.com')

        cy.get('#password').type('senha incorreta')

        cy.get('.woocommerce-form > .button').click()

        cy.contains("Erro: A senha fornecida para o e-mail vitor2@email.com está incorreta. Perdeu a senha?")
    })
})