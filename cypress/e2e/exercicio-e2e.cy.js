/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
    
      cy.contains('Abominable Hoodie').click()
      cy.get('.button-variable-item-L').click()
      cy.get('.button-variable-item-Green').click()
      cy.get('.input-text').clear().type(1)
      cy.get('.single_add_to_cart_button').click()
        
     cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
     cy.contains('Aero Daily Fitness Tee').click()
     cy.get('.button-variable-item-S').click()
     cy.get('.button-variable-item-Black').click()
     cy.get('.input-text').clear().type(1)
     cy.get('.single_add_to_cart_button').click()

     cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
     cy.contains('Ariel Roll Sleeve Sweatshirt').click()
     cy.get('.button-variable-item-XS').click()
     cy.get('.button-variable-item-Red').click()
     cy.get('.input-text').clear().type(1)
     cy.get('.single_add_to_cart_button').click()

     cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
     cy.contains('Arcadio Gym Short').click()
     cy.get('.button-variable-item-33').click()
     cy.get('.button-variable-item-Blue').click()
     cy.get('.input-text').clear().type(1)
     cy.get('.single_add_to_cart_button').click()


     cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
     cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
     cy.get('#billing_first_name').type('Edson')
     cy.get('#billing_last_name').type('Oliveira')
     cy.get('#billing_address_1').type('Rua João Castelo N° 57')
     cy.get('#billing_city').type('Sao Luis-MA')
     cy.get('#billing_postcode').type('65085420')
     cy.get('#billing_phone').type('95642114111414')
     cy.get('#billing_email').type('edsonz3k2@gmail.com')
     cy.get('#terms').click()
     cy.get('#place_order').click()
     cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')














      
  });


})