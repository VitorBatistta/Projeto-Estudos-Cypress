///<reference types="cypress"/>

describe('Forgot password', () => {


    it('Realizar a recuperação de senha', () => {
        cy.visit('/')

        cy.get('.icon-user-unfollow').click()

        cy.get('.lost_password > a').click()

        cy.get('#user_login').type('vitor@email.com')

        cy.get('.woocommerce-Button').click()

        cy.contains('O e-mail de redefinição de senha foi enviado.')
        cy.contains('Um e-mail de redefinição de senha foi enviada para o endereço de e-mail da sua conta, mas pode levar alguns minutos para aparecer na sua caixa de entrada. Aguarde pelo menos 10 minutos antes de tentar novamente ou verifique sua caixa de spam.')


       
    })

    it('Recuperar senha apos preencher senha incorreta', () => {
        cy.visit('/')

        cy.get('.icon-user-unfollow').click()
        
        cy.get('#username').type('vitor2@email.com')

        cy.get('#password').type('senha incorreta')

        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li > a').click()

        cy.get('#user_login').type('vitor@email.com')

        cy.get('.woocommerce-Button').click()

        cy.contains('O e-mail de redefinição de senha foi enviado.')
        cy.contains('Um e-mail de redefinição de senha foi enviada para o endereço de e-mail da sua conta, mas pode levar alguns minutos para aparecer na sua caixa de entrada. Aguarde pelo menos 10 minutos antes de tentar novamente ou verifique sua caixa de spam.')

    })

        it('Validação de recuperação sem preencher o campo email.', () => {
        cy.visit('/')

        cy.get('.icon-user-unfollow').click()

        cy.get('.lost_password > a').click()

        //cy.get('#user_login').type('vitor@email.com')

        cy.get('.woocommerce-Button').click()

        cy.contains('Informe um nome de usuário ou endereço de e-mail.')
       
    })

    it.only('Validação de recuperação com email invalido', () => {
        cy.visit('/')

        cy.get('.icon-user-unfollow').click()

        cy.get('.lost_password > a').click()

        cy.get('#user_login').type('emailinvalido')

        cy.get('.woocommerce-Button').click()

        cy.contains('Nome de usuário ou e-mail inválido.')
       
    })


})