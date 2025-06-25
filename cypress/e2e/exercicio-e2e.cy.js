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
    cy.get('.input-text').clear().type(2)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '2 × “Abominable Hoodie” foram adicionados no seu carrinho.')

  });
  
  it('Peddido 02 ', () => {
     cy.contains('Ariel Roll Sleeve Sweatshirt').click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(4)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '4 × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
  });



  it('Pedido 03 ', () => {
     cy.contains('Apollo Running Short').click()
    cy.get('.button-variable-item-34').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type(6)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '6 × “Apollo Running Short” foram adicionados no seu carrinho.')


  });
  
it('Pedido 04', () => {
       cy.contains('Argus All-Weather Tank').click()
       cy.get('.button-variable-item-S').click()
       cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
       cy.get('.input-text').clear().type(8)
       cy.get('.single_add_to_cart_button').click()
       cy.get('.woocommerce-message').should('contain', '8 × “Argus All-Weather Tank” foram adicionados no seu carrinho.')


});



  });

