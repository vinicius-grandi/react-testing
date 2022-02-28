/// <reference types="cypress" />
describe('App Component', () => {
  beforeEach(() => cy.visit('/'))
  it('should add item to list', () => {
    cy.get('[data-cy="text-input"]').type('jojo');
    cy.get('[data-cy="add-item-button"]').click();
    cy.get('[data-cy="jojo"]').should('to.have.length', 1);
  });

  it('should add +1 to list', () => {
    cy.get('[data-cy="add+1-button"]').click();
    cy.get('li').should('to.have.length', 2);
  });
});
