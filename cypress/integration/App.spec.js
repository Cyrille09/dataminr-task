describe('form submission', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should submit the form', () => {
    cy.get('#text');
    cy.get('#submitted').should('not.exist');
    cy.get('form').submit();
    cy.get('#submitted').should('exist');
  });
});
