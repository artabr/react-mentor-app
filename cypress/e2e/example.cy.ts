describe('My First Test', () => {
  it("doesn't find the movie in the search results", () => {
    cy.visit('/');
    cy.get("[data-testid='hero-section-title']").should('contain.text', 'Find your movie');
    cy.get("[data-testid='movie-card-title']").should('not.contain.text', 'Colossal');
  });

  it('types movie name and clicks search and finds the movie in the search results', () => {
    cy.visit('/');
    cy.get("[data-testid='search-input']").type('colossal');
    cy.get("[data-testid='search-button']").click();
    cy.get("[data-testid='movie-card-title']").should('contain.text', 'Colossal');
  });
});

export {};
