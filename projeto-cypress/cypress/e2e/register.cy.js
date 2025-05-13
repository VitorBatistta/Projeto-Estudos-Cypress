///<reference types="cypress"/>

describe('Register user', () => {


    it('Realizar o cadastro de usuário', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')

        cy.get('.icon-user-unfollow').click()

        cy.get('#reg_email').type('vitor@email.com')
        cy.get('#reg_password').type('Teste*12345678')

    })
    it('Mensagem de erro campo email', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')

        cy.get('.icon-user-unfollow').click()

        
        cy.get('#reg_password').type('Teste*12345678')

        cy.get(':nth-child(4) > .button').click()

        cy.contains('Erro: Informe um endereço de e-mail válido.')

    })
    
    it('Mensagem de erro campo senha', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')

        cy.get('.icon-user-unfollow').click()

        
        cy.get('#reg_email').type('vitor@email.com')

        cy.get(':nth-child(4) > .button').click()

        cy.contains('Erro: Digite a senha da conta.')

    })

    it.only('Mensagem de dica para criação de senha', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')

        cy.get('.icon-user-unfollow').click()

        cy.get('#reg_email').type('vitor@email.com')
        cy.get('#reg_password').type('1')

        cy.contains('Dica: A senha deve ter pelo menos doze caracteres. Para torná-la mais forte, use letras maiúsculas e minúsculas, números e símbolos como ! " ? $ % ^ & ).')

    })


})