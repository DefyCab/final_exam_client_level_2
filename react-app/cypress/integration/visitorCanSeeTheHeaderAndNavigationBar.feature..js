describe("Visitor can visit the application", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see a header", () => {
    cy.get("[data-cy=main-header]").should("contain.text", "COURSE LIST");
  });

  describe("is expected to see available course", () => {
    it('is expected to display option "Workshops" ', () => {
      expect("[data-cy=workshops").should("be.visible");
    });

    it('is expected to display option "Testing" ', () => {
      expect("[data-cy=testing").should("be.visible");
    });

    it('is expected to display option Vue" ', () => {
      expect("[data-cy=vue").should("be.visible");
    });

    it('is expected to display option "Productivity" ', () => {
      expect("[data-cy=productivity").should("be.visible");
    });

    it('is expected to display option "Node" ', () => {
      expect("[data-cy=node").should("be.visible");
    });
    it('is expected to display option "React" ', () => {
      expect("[data-cy=react").should("be.visible");
    });
  });
});
