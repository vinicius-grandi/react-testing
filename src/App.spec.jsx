import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

describe('App Component', () => {
  it('should add on click', () => {
    mount(<App />);
    const input = cy.get('[data-cy="text-input"]');
    input.type('jojo');
    cy.get('[data-cy="add-item-button"]').click();
    cy.get('[data-cy="jojo"]').should('to.have.length', 1);
  });
  it('should remove from list when item is clicked', () => {
    mount(<App />);
    const input = cy.get('[data-cy="text-input"]');
    input.type('jojo');
    cy.get('[data-cy="add-item-button"]').click();
    cy.get('[data-cy="jojo"]').click();
    cy.get('[data-cy="jojo"]').should('not.exist');
  });
});
