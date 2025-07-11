Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('adicionarProdutos',(produto) =>{
      cy.contains(produto).click()
      cy.get('.button-variable-item-L').click()
      cy.get('.button-variable-item-Green').click()
      cy.get('.input-text').clear().type(1)
      cy.get('.single_add_to_cart_button').click()
})