describe("Visitor can naivagte the appliation", () => {
  describe("Visitor os navigated to right view when click on category", () => {
    before(() => {
      cy.visit("/");
    });

    it("is expected to display workshops view", () => {
      cy.get("[data-cy=workshops]").click();
      cy.url().should("contain", "categories/workshops");
    });

    it("is expected to display workshops view", () => {
      cy.get("[data-cy=testing]").click();
      cy.url().should("contain", "categories/testing");
    });

    it("is expected to display workshops view", () => {
      cy.get("[data-cy=vue]").click();
      cy.url().should("contain", "categories/vue");
    });

    it("is expected to display workshops view", () => {
      cy.get("[data-cy=productivity]").click();
      cy.url().should("contain", "categories/productivity");
    });

    it("is expected to display workshops view", () => {
      cy.get("[data-cy=node]").click();
      cy.url().should("contain", "categories/node");
    });

    it("is expected to display workshops view", () => {
      cy.get("[data-cy=react]").click();
      cy.url().should("contain", "categories/react");
    });
  });
});
