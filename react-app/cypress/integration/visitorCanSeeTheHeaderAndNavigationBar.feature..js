describe("Visitor can visit the application", () => {
  before(() => {
    cy.visit("/");
  });

  it("iscy.geted to see a header", () => {
    cy.get("[data-cy=main-header]").should("contain.text", "COURSE LIST");
  });

  describe("iscy.geted to see available course", () => {
    it('iscy.geted to display option "Workshops" ', () => {
      cy.get("[data-cy=workshops]").should("be.visible");
    });

    it('iscy.geted to display option "Testing" ', () => {
      cy.get("[data-cy=testing]").should("be.visible");
    });

    it('iscy.geted to display option Vue" ', () => {
      cy.get("[data-cy=vue]").should("be.visible");
    });

    it('iscy.geted to display option "Productivity" ', () => {
      cy.get("[data-cy=productivity]").should("be.visible");
    });

    it('iscy.geted to display option "Node" ', () => {
      cy.get("[data-cy=node]").should("be.visible");
    });
    it('iscy.geted to display option "React" ', () => {
      cy.get("[data-cy=react]").should("be.visible");
    });
  });
});
