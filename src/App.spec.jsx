/// <reference types="cypress" />
import { mount } from '@cypress/react';
import App from './App';

describe('App Component', () => {
  it('should add on click', () => {
    mount(<App />);
    cy.get('[data-cy="text-input"]').type('aaa', { force: true });
    cy.get('[data-cy="add-item-button"]').click();
    cy.get('[data-cy="jojo"]').should('to.have.length', 1);
  })
});
