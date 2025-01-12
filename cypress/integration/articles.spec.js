describe("NY Times Articles", () => {
    it("loads and displays articles", () => {
      cy.visit("/");
      cy.contains("NY Times Most Popular Articles");
    });
  });
  