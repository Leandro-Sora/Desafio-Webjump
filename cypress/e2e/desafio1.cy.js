/// <reference types = "cypress" />
context('Acesso ao site do desafio e automacao das informacoes', () => {
  beforeEach(() => {
    cy.visit('https://wj-qa-automation-test.github.io/qa-test/', { timeout: 100000})
  });
  it('Inicio da automacao', () => {
    //Click de botao one
    cy.get('#btn_one')
      .click()
      .should('not.visible')

    //Click de botao two
    cy.get('#btn_two')
      .click()
      .should('not.visible')
    //Click de botao four
    cy.get('#btn_link')
      .click()
      .should('not.visible')
    //Click de botao iframe
    cy.iframe('iframe[src*="buttons"]').find('button[id="btn_one"]').click()
    cy.iframe('iframe[src*="buttons"]').find('button[id="btn_two"]').click()
    cy.iframe('iframe[src*="buttons"]').find('button[id="btn_link"]').click()
    //Check de ausencia nos botoes iframe
    cy.iframe('iframe[src*="buttons"]').find('button[id="btn_one"]').should('not.be.visible')
    cy.iframe('iframe[src*="buttons"]').find('button[id="btn_two"]').should('not.be.visible')
    cy.iframe('iframe[src*="buttons"]').find('button[id="btn_link"]').should('not.be.visible')
    //Digitando o primeiro nome
    cy.get('#first_name').type('Leandro')
    //clique no botão reset 
    cy.get('#reset_buttons').click()
  })
  it('Etapa final da automacao', () => {
    //clique no botao one
    cy.get('#btn_one').click()
    //verificando opcao three
    cy.get('#panel_body_one > :nth-child(9)').should('be.visible')
    //selecionando opcao na select box
    cy.get('#select_box').select('option_two').should('have.value', 'option_two')
    //verificando imagem selenium
    cy.get('[alt="selenium"]').should('be.visible')
  });
});
