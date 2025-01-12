import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ArticlePage from "../pages/ArticlePage";


const mockArticles = [
  { id: 1, title: "First Article", abstract: "Abstract 1", url: "https://example.com/1" },
  { id: 2, title: "Second Article", abstract: "Abstract 2", url: "https://example.com/2" },
];

test("renders the correct article based on the id", () => {
  render(
    <MemoryRouter initialEntries={["/articles/1"]}>
      <Routes>
        <Route path="/articles/:id" element={<ArticlePage articles={mockArticles} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("First Article")).toBeInTheDocument();
  expect(screen.getByText("Abstract 1")).toBeInTheDocument();
  expect(screen.getByText("Read More")).toBeInTheDocument();
});

test("displays 'Article not found' for an invalid id", () => {
  render(
    <MemoryRouter initialEntries={["/articles/99"]}>
      <Routes>
        <Route path="/articles/:id" element={<ArticlePage articles={mockArticles} />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Article not found")).toBeInTheDocument();
});
