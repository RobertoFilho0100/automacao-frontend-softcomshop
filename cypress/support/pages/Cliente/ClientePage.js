import ClienteLocators from "../../locators/ClienteLocators";

class ClientePage {
    visit() {
      cy.visit('/cadastro/cliente/novo');
    }
  
    preencherCamposCliente(cliente) {
      cy.get(ClienteLocators.documentInput)
        .click()
        .type(cliente.cpf);
      cy.get(ClienteLocators.clientNameinput).type(String(cliente.nome, { parseSpecialCharSequences: false }));
    }
  
    cadastrar() {
      cy.get(ClienteLocators.btnSalvar).click();
    }

    confirmacaoCadastroCliente() {
      cy.contains('Sucesso').should('be.visible')
    }
}
  
module.exports = new ClientePage();
  